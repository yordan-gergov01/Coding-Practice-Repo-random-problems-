'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScollTo.addEventListener('click', event => {
  event.preventDefault();

  // const s1Coords = section1.getBoundingClientRect();

  // Old way
  // window.scrollTo({
  //   left: s1Coords.left + window.scrollX,
  //   top: s1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// Cannot use arrow functions because of this
// document.querySelectorAll('.nav__link').forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
// Use event delegation to attach event handler on the common parent element, because on each one is bad practice if we have 200 elements

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
function handleHover(event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// Pretty bad for performance with that scroll event
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// We want the nav to be sticky positioned when the header is out of view
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

function stickyNav(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // when 0% of the header is visible
  rootMargin: `-${navHeight}px`, // box of 90 pixels that will be applied outside of target element
});

headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
let curSlide = 0;
const maxSlide = slides.length;

function createDots() {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
}

function activateDot(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
}

function goToSlide(slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
}

function nextSlide() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
}

function prevSlide() {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
}

function init() {
  goToSlide(0);
  createDots();
  activateDot(0);
}
init();

// Next and previous slide events
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    curSlide = Number(e.target.dataset.slide);
    goToSlide(curSlide);
    activateDot(curSlide);
  }
});
