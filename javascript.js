const buttons = document.querySelectorAll('input[type=radio]');
const submit = document.querySelector('#submit');
let playerChoice;
let computerChoice;
let i = 0;
let cScore = 0;
let pScore = 0;

buttons.forEach(button => {
    button.addEventListener('change', () => {
       playerChoice = button.id;
    })
});

submit.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    rpsRound(computerChoice, playerChoice);
});

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); // 0, 1, 2
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
        i++;
    } else if (computerChoice === "scissors" &&
               playerChoice === "paper") {
        alert("Computer wins! Scissors beats paper!");
        i++;
    } else if (computerChoice === "rock" &&
               playerChoice === "scissors") {
        alert("Computer wins! Rock beats scissors!");
        i++;
    } else if (computerChoice === "paper" &&
               playerChoice === "rock") {
        alert("Computer wins! Paper beats rock!");
        i++;
    } else if (computerChoice === "scissors" &&
               playerChoice === "rock") {
        alert("Player wins! Rock beats scissors!");
        i++;
    } else if (computerChoice === "rock" &&
               playerChoice === "paper") {
        alert("Player wins! Paper beats rock!");
        i++;
    } else {
        alert("Player wins! Scissors beats paper!");
        i++;
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let computerChoice = getComputerChoice();
//         let playerChoice = prompt("Rock paper scissors shoot!").toLowerCase();
//         while (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
//             if (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
//                 alert("Invalid answer!");
//                 playerChoice = prompt("Rock paper scissors shoot!").toLowerCase();
//             } else {
//                 break;
//             }
//         }
//         let roundScore = rpsRound(computerChoice, playerChoice);
//         if (roundScore === "lose") {
//             computerScore++;
//         } else if (roundScore === "win") {
//             playerScore++;
//         }
//     }
//     if (playerScore === computerScore) {
//         alert("Tie game!");
//     } else if (playerScore > computerScore) {
//         alert("Player wins!");
//     } else {
//         alert("Computer wins! Too bad!")
//     }
// }

// game();