// Global Variables
let humanScore = 0;
let computerScore = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Get Computer Choice
function getComputerChoice() {
    // Choices: 1 - Rock, 2 - Paper, 3 - Scissors
    const choiceNumber = Math.floor(Math.random() * 3) + 1;
    return choiceNumber === 1 ? ROCK : 
           choiceNumber === 2 ? PAPER : 
           SCISSORS;
}

// Get Human Choice
function getHumanChoice() { 
    return prompt('Enter your choice (rock, paper, scissors only): ');
}

function getRoundResults(humanChoice, computerChoice) {
    // Get the positive result when human wins the round
    return (humanChoice === ROCK) && (computerChoice === SCISSORS) ||
           (humanChoice === PAPER) && (computerChoice === ROCK) ||
           (humanChoice === SCISSORS) && (computerChoice === PAPER);
}

// Play a single round
function playRound(humanChoice, computerChoice) {
    const humanWinsTheRound = getRoundResults(humanChoice, computerChoice);
    if(humanChoice === computerChoice) {
        console.log('DRAW');
    } else if(humanWinsTheRound) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function rockPaperScissorsGame(roundNumber) {
    // Get Players' Choices
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    // Play Round
    console.log(`==ROUND ${roundNumber}==`);
    console.log(`${humanSelection} VS ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`SCORE - Human: ${humanScore} | CPU: ${computerScore}`);
}

function displayGameResult(humanScore, cpuScore) {
    if(humanScore === cpuScore) {
        console.log('The Game is a DRAW!');
    } else if(humanScore < cpuScore) {
        console.log('Computer Wins the game!');
    } else {
        console.log('Congrats! You win the game!');
    }
}

function playGame() {
    rockPaperScissorsGame(1);
    rockPaperScissorsGame(2);
    rockPaperScissorsGame(3);
    rockPaperScissorsGame(4);
    rockPaperScissorsGame(5);
    displayGameResult(humanScore, computerScore);
}

playGame();
