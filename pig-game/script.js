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

let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneCurrent.textContent = 0;
  playerTwoCurrent.textContent = 0;

  playerOneSection.classList.remove('player--winner');
  playerTwoSection.classList.remove('player--winner');
  dice.classList.add('hidden');
  playerOneSection.classList.add('player--active');
  playerTwoSection.classList.remove('player--active');

  currentScore = 0;
  activePlayer = 0;
  playing = true;
}
init();

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

    if (scores[activePlayer] >= 100) {
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

newGameButton.addEventListener('click', init);
