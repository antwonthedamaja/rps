let computerChoice

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors"
            break;
    }
    return computerChoice
}

function getComputerChoices() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// Chose one above this line
function rpsRound(computerChoice, playerChoice) {

}