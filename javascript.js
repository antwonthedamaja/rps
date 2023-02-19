const buttons = document.querySelectorAll('input[type=radio]');
const submit = document.querySelector('#submit');
const pCounter = document.querySelector('#pCounter');
const cCounter = document.querySelector('#cCounter');

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
    if (playerChoice) {
    game(computerChoice, playerChoice);
    }
});

function updateCounter() {
    pCounter.innerHTML = pScore;
    cCounter.innerHTML = cScore;
}

function game(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        submit.textContent = "TIE!";
        submit.style.backgroundColor = '#ffff00';
    } else if (computerChoice === "scissors" &&
               playerChoice === "paper") {
        submit.textContent = "YOU LOSE!";
        submit.style.backgroundColor = '#ff0303';
        cScore++;
    } else if (computerChoice === "rock" &&
               playerChoice === "scissors") {
        submit.textContent = "YOU LOSE!";
        submit.style.backgroundColor = '#ff0303';
        cScore++;
    } else if (computerChoice === "paper" &&
               playerChoice === "rock") {
        submit.textContent = "YOU LOSE!";
        submit.style.backgroundColor = '#ff0303';
        cScore++;
    } else if (computerChoice === "scissors" &&
               playerChoice === "rock") {
        submit.textContent = "YOU WIN!";
        pScore++;
    } else if (computerChoice === "rock" &&
               playerChoice === "paper") {
        submit.textContent = "YOU WIN!";
        pScore++;
    } else {
        submit.textContent = "YOU WIN!";
        pScore++;
    } 
    i++;
    updateCounter();
    if (i !== 5) {
        setTimeout(() => {
            submit.textContent = "SHOOT!";
            submit.style.backgroundColor = '#18ff03';
        }, 1500);
    } else if (i === 5 && pScore > cScore) {
        submit.textContent = "GAME WON!";
        submit.style.backgroundColor = '#18ff03';
        setTimeout(() => {
            i = 0;
            pScore = 0;
            cScore = 0;
            submit.textContent = "SHOOT!";
            updateCounter();
        }, 3000);
    } else if (i === 5 && pScore < cScore) {
        submit.textContent = "GAME LOST!";
        submit.style.backgroundColor = '#ff0303';
        setTimeout(() => {
            i = 0;
            pScore = 0;
            cScore = 0;
            submit.textContent = "SHOOT!";
            submit.style.backgroundColor = '#18ff03';
            updateCounter();
        }, 3000);
    } else if (i === 5 && pScore === cScore) {
        submit.textContent = "GAME TIE!";
        submit.style.backgroundColor = '#ffff00';
        setTimeout(() => {
            i = 0;
            pScore = 0;
            cScore = 0;
            submit.textContent = "SHOOT!";
            submit.style.backgroundColor = '#18ff03';
            updateCounter();
        }, 3000);
    }
}

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