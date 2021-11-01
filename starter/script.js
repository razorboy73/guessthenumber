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
    messageText('Pick a real number!');
  } else if (guess === number) {
    let backgroundcolor = document.querySelector('body');
    backgroundcolor.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '45rem';
    messageText('You Got It!!!');
    document.querySelector('.number').textContent = number;
    playGame = false;
  } else if (guess !== number) {
    if (score > 1 && guess > number) {
      messageText('Too High');
    }
    if (score > 1 && guess < number) {
      messageText('Too Low');
    }
    score = score - 1;
    scoreContent(score);
  } else {
    messageText('You Lost');
    scoreContent(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
  score = 20;
  messageText('Start guessing...');
  scoreContent(score);
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

function messageText(content) {
  return (document.querySelector('.message').textContent = content);
}

function scoreContent(content) {
  return (document.querySelector('.score').textContent = content);
}
