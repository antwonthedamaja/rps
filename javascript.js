function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function rpsRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert("It was a tie!");
        return "tie";
    } else if (computerChoice === "scissors" &&
               playerChoice === "paper") {
        alert("Computer wins! Scissors beats paper!");
        return "lose";
    } else if (computerChoice === "rock" &&
               playerChoice === "scissors") {
        alert("Computer wins! Rock beats scissors!");
        return "lose";
    } else if (computerChoice === "paper" &&
               playerChoice === "rock") {
        alert("Computer wins! Paper beats rock!");
        return "lose";
    } else if (computerChoice === "scissors" &&
               playerChoice === "rock") {
        alert("Player wins! Rock beats scissors!");
        return "win";
    } else if (computerChoice === "rock" &&
               playerChoice === "paper") {
        alert("Player wins! Paper beats rock!");
        return "win";
    } else {
        alert("Player wins! Scissors beats paper!");
        return "win";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock! Paper! Scissors! Shoot").toLowerCase();
        let roundScore = rpsRound(computerChoice, playerChoice);
        if (roundScore === "lose") {
            computerScore++;
        } else if (roundScore === "win") {
            playerScore++;
        } else {
        }
    }
    if (playerScore === computerScore) {
        alert("Tie game!");
    } else if (playerScore > computerScore) {
        alert("Player wins!");
    } else {
        alert("Computer wins! Too bad!")
    }
}

let playerScore = 0;
let computerScore = 0;
game();