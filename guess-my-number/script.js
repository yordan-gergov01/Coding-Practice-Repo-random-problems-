'use strict';

const button = document.querySelector('.check');
button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please start by writing a number...';
  }
});
