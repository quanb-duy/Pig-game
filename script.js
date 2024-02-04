'use strict';

// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');

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

  // check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
  }
});
