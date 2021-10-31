'use strict';

let number = randomNumber();
console.log(number);

let score = 20;
let highscore = 0;
let guess = '';

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log('score: ', score);
  let playGame = true;

  if (!guess) {
    document.querySelector('.message').textContent = 'Pick a real number!';
  } else if (guess === number) {
    let backgroundcolor = document.querySelector('body');
    backgroundcolor.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.message').textContent = 'You Got It!!!';
    document.querySelector('.number').textContent = number;
    playGame = false;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  let backgroundcolor = document.querySelector('body');
  backgroundcolor.style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  number = randomNumber();
});

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
