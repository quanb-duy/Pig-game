'use strict';

// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

score0El.textContent = 0;
score1El.textContent = 0;

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');

const scoreCounter1 = 0;
const scoreCounter2 = 0;
