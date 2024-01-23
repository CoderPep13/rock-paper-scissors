let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = "Tie!"
        outcomeDiv.appendChild(p)
    } else if(computerSelection === "rock" && playerSelection === "scissors" || 
               computerSelection === "paper" && playerSelection === "rock" ||
               computerSelection === "scissors" && playerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "Computer wins!"
        outcomeDiv.appendChild(p)
        computerScore++;
    } else {
        const p = document.createElement('p')
        p.innerText = "Player wins!"
        outcomeDiv.appendChild(p)
        playerScore++;
        return "Player wins!"
}
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = "Player has prevailed!"
        outcomeDiv.append(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = "Computer has prevailed!"
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore}`
    computerScoreSpan.innerText = `Computer score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})
