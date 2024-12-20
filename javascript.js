    // Get computer choice randomly choosing r, p, or s
    // Get user choice
    // declare score variables to keep track
    // Play the game

    const buttons = document.querySelectorAll('button');

    let humanChoice = '';
    let humanScore = 0;
    let compScore = 0;
        
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


    function getHumanChoice() {

        buttons.forEach(button => {
            
            button.addEventListener('click', () => {
                // Update the external state variable
                humanChoice = button.textContent.toLowerCase(); 
                console.log('User choice: ' + humanChoice);
                
                const compChoice = getComputerChoice();
                console.log('Comp choice: ' + compChoice);
                // Call playRound immediately after getting the choice
                playRound(humanChoice, getComputerChoice()); 
                console.log('Human ' + humanChoice + ': ' + humanScore);
                console.log('Computer ' + getComputerChoice() + ': ' + compScore);
            });
        });
    }



    function playRound(humanChoice, compChoice) {
        if (humanChoice == compChoice) {
            console.log('draw!');
        } else if (humanChoice == 'rock' && compChoice == 'scissors' || 
        humanChoice == 'scissors' && compChoice == 'paper' ||
        humanChoice == 'paper' && compChoice == 'rock') {
            console.log('You win! ' + humanChoice + ' beats ' + compChoice +'!');
            humanScore++;
        } else {
            console.log('You lose! ' + compChoice + ' beats ' + humanChoice +'!');
            compScore++;
        }
        
        // if (humanChoice == 'rock' && compChoice == 'scissors' || 
        //     humanChoice == 'scissors' && compChoice == 'paper' ||
        //     humanChoice == 'paper' && compChoice == 'rock') {
        //     console.log('You win! ' + humanChoice + ' beats ' + compChoice +'!');
        //     humanScore++;
        // } else if (compChoice == 'rock' && humanChoice == 'scissors' || 
        //         compChoice == 'scissors' && humanChoice == 'paper' ||
        //         compChoice == 'paper' && humanChoice == 'rock') {
        //     console.log('You lose! ' + compChoice + ' beats ' + humanChoice +'!');
        //     compScore++;
        //     }
        // else {
        //     console.log('draw!');
        // }
    }

    function playGame () {
        console.log('Make your selection');
        getHumanChoice();

        
    }



    playGame();


