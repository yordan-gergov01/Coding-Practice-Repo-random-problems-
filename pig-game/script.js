'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const playerOneCurrent = document.getElementById('current--0');
const playerTwoCurrent = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const rollDiceButton = document.querySelector('.btn--roll');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

dice.classList.add('hidden');

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerOneSection.classList.toggle('player--active');
  playerTwoSection.classList.toggle('player--active');
}

rollDiceButton.addEventListener('click', () => {
  if (playing) {
    const randomNumberForDice = Math.floor(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumberForDice}.png`;

    if (randomNumberForDice !== 1) {
      currentScore += randomNumberForDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
