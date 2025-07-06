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

    // Game logic
    if(humanChoice === 'rock') {
        if(computerChoice === 'rock') {
            console.log('DRAW!');
        } else if(computerChoice === 'paper') {
            console.log('You Lose! Paper beats Rock');
            computerScore++;
        } else if(computerChoice === 'scissors') {
            console.log('You Win! Rock beats Scissors');
            humanScore++;
        }
    } else if(humanChoice === 'paper') {
        if(computerChoice === 'rock') {
            console.log('You Win! Paper beats Rock');
            humanScore++;
        } else if(computerChoice === 'paper') {
            console.log('DRAW!');
        } else if(computerChoice === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            computerScore++;
        }
    } else if(humanChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            computerScore++;
        } else if(computerChoice === 'paper') {
            console.log('You Win! Scissors beats Paper');
            humanScore++;
        } else if(computerChoice === 'scissors') {
            console.log('DRAW!');
        }
    }
}

const humanChoice = getHumanChoice();

console.log(`${humanChoice} VS rock`);
playRound(humanChoice, 'rock' );
console.log(`Human: ${humanScore}, CPU: ${computerScore}`);

console.log(`${humanChoice} VS paper`);
playRound(humanChoice, 'paper' );
console.log(`Human: ${humanScore}, CPU: ${computerScore}`);

console.log(`${humanChoice} VS scissors`);
playRound(humanChoice, 'scissors' );
console.log(`Human: ${humanScore}, CPU: ${computerScore}`);