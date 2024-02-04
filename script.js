'use strict';

// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 50;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');

const scoreCounter1 = 0;
const scoreCounter2 = 0;

function randomDice() {
  const randInt = Math.floor(Math.random() * 6) + 1;
  return randInt;
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // generate random number
  const dice = randomDice();

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});
