function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt('Choose Rock, Paper or Scissors')
    return choice.toLowerCase();
}



function playGame() {
    let humanScore = 0
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++; // add 1 to human score
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++; // add 1 to computer score
        }
    }

        //Round 1
    playRound(getHumanChoice(), getComputerChoice());

     //Round 2
    playRound(getHumanChoice(), getComputerChoice());

     //Round 3
    playRound(getHumanChoice(), getComputerChoice());

     //Round 4
    playRound(getHumanChoice(), getComputerChoice());

     //Round 5
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("Final Score - Human: " + humanScore + ", Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!"); 
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

    