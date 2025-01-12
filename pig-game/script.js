'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add('hidden');

rollDiceButton.addEventListener('click', () => {
  const randomNumberForDice = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumberForDice}.png`;
  dice.classList.remove('hidden');
});
