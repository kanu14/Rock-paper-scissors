// Get computer choice randomly choosing r, p, or s
// Get user choice
// Play the game


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 + 1);
    if (random == 1) {
        return 'rock';
    } else if (random == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let human = prompt('Enter rock, paper, or scissors');
    if (human == 'rock' || human == 'paper' || human == 'scissors') {
        return human;
    } else {
        alert('enter again');
    }
}
