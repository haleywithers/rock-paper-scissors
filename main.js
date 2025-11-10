let winnerMessage = document.querySelector(".marquee-text");

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






    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            winnerMessage.textContent = "It's a Tie! It's a Tie! It's a Tie! ".repeat(100);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            winnerMessage.textContent = "You Win! You Win! You Win! ".repeat(100); 
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            winnerMessage.textContent = "You Win! You Win! You Win! ".repeat(100); 
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            winnerMessage.textContent = "You Win! You Win! You Win! ".repeat(100); 
        } else {
            winnerMessage.textContent = "You Lose! You Lose! You Lose! ".repeat(100);
        }
    }




    
const images = document.querySelectorAll("img");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        let humanChoice = this.className;
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    });
});