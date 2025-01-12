'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const playerOneCurrent = document.getElementById('current--0');
const playerTwoCurrent = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

dice.classList.add('hidden');

rollDiceButton.addEventListener('click', () => {
  const randomNumberForDice = Math.floor(Math.random() * 6) + 1;

  dice.src = `dice-${randomNumberForDice}.png`;
  dice.classList.remove('hidden');
  playerOneScore.textContent = randomNumberForDice;

  if (randomNumberForDice !== 1) {
    currentScore += randomNumberForDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerOneSection.classList.toggle('player--active');
    playerTwoSection.classList.toggle('player--active');
  }
});
