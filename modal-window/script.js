'use strict';

const showButton = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

showButton.forEach(button =>
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
  })
);

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});
