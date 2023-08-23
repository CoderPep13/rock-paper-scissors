function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors?","Choose only one!").toLocaleLowerCase();
    return choice;
}

function getComputerChoice() {
    let choice = Math.random();
    if(choice <= 0.33) {
        return "rock"
    } else if(choice >= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a draw!"
    } else if(playerSelection == "rock" && computerSelection == "scissors" 
            || playerSelection == "scissors" && computerSelection == "paper" 
            || playerSelection == "paper" && computerSelection == "rock") {
                playerScore++;
                return "Player wins!"
            } else {
                computerScore++;
                return "Computer wins!"
            }
}

function game() {
    console.log("Welcome to the game of your life!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("Player won the series!")
    } else if (playerScore < computerScore) {
        console.log("Computer won the series!")
    } else {
        console.log("No one won!")
    }
}

game();
