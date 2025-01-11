'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please start by writing a number...');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    score++;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high...' : '📉 Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 Sorry, you lose the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.highscore').textContent = 0;
    }
  }
});

resetButton.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
