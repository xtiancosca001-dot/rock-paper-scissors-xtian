// Global Variables
let humanScore = 0;
let computerScore = 0;

// Get Computer Choice
function getComputerChoice() {
    let computerChoice;
    // Choices: 1 - Rock, 2 - Paper, 3 - Scissors
    const choiceNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`Choice Number: ${choiceNumber}`);
    if(choiceNumber === 1) {
        computerChoice = 'rock';
    } else if(choiceNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// Get Human Choice
function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt('Enter your choice (rock, paper, scissors only): ');
    return humanChoice;
}

// Play a single round
function playRound(humanChoice, computerChoice) {
    // Make choices case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
}