// Get computer choice randomly choosing r, p, or s
// Get user choice
// declare score variables to keep track
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

let humanScore = 0;
let compScore = 0;
// let n = 0;

function playRound(humanChoice, compChoice) {
    if (humanChoice == 'rock' && compChoice == 'scissors' || 
    humanChoice == 'scissors' && compChoice == 'paper' ||
    humanChoice == 'paper' && compChoice == 'rock') {
        console.log('You win! ' + humanChoice + ' beats ' + compChoice +'!');
        humanScore++;
    } else if (compChoice == 'rock' && humanChoice == 'scissors' || 
    compChoice == 'scissors' && humanChoice == 'paper' ||
    compChoice == 'paper' && humanChoice == 'rock') {
        console.log('You lose! ' + compChoice + ' beats ' + humanChoice +'!');
        compScore++;
        }
    else {
        console.log('draw!');
        // n++;
        }
}

function playGame () {
    for (let i = 0; i < 6; i++) {

        if (humanScore == 3 || compScore == 3){
            console.log('Game ended!')
        } else {
            const humanSelection = getHumanChoice();
            const compSelection = getComputerChoice();
            playRound(humanSelection, compSelection);
            console.log('Human ' + humanSelection +': '+ humanScore);
            console.log('Comp ' + compSelection +': '+ compScore);
        }
    }

}

playGame();

// console.log('Human ' + humanSelection +': '+ humanScore);
// console.log('Comp ' + compSelection +': '+ compScore);