'use strict';

console.log('helloWorld')

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.userInput').textContent = message;
};


document.querySelector('.checkButton').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No number has been input');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Number is correct!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.theGame').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30px';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.newHighScore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.start-score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.resetButton').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    displayMessage('Start guessing!');
    document.querySelector('.start-score').textContent = "Score:";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.theGame').style.backgroundColor = '#eee';
    document.querySelector('.number').style.width = '30px';
});