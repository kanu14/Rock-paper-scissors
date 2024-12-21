    // Get computer choice randomly choosing r, p, or s
    // Get user choice
    // declare score variables to keep track
    // Play the game

    const buttons = document.querySelectorAll('button');

    let humanChoice = '';
    let compChoice = '';
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
                
                let compChoice = getComputerChoice();
                console.log('Comp choice: ' + compChoice);
                // Call playRound immediately after getting the choice
                playRound(humanChoice, compChoice); 
                console.log('Human ' + humanChoice + ': ' + humanScore);
                console.log('Computer ' + compChoice + ': ' + compScore);
                
                const oneScore = document.querySelector('#human');
                const twoScore = document.querySelector('#cpu');
                oneScore.textContent = humanScore;
                twoScore.textContent = compScore;

                if (humanScore == 5 || compScore == 5) {
                    const endGame = document.querySelector('#end');
                    endGame.textContent = 'End of Game!';
                    
                }
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
     
    }

    function playGame () {
        console.log('Make your selection');
        getHumanChoice();
        humanChoice = '';
        compChoice = '';
    }

    playGame();


