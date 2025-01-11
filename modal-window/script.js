'use strict';

const showButton = document.querySelector('.show-modal');
const closeButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

showButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
