'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
const secretNumber = (document.querySelector('.number').textContent = number);
const button = document.querySelector('.check');
let score = 20;

button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please start by writing a number...';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💣 Sorry, you lose the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💣 Sorry, you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    score++;
    document.querySelector('.score').textContent = score;
  }
});
