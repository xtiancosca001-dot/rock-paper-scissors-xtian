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
    if(humanChoice === ROCK) {
        if(computerChoice === ROCK) {
            console.log('DRAW!');
        } else if(computerChoice === PAPER) {
            console.log('You Lose! Paper beats Rock');
            computerScore++;
        } else if(computerChoice === SCISSORS) {
            console.log('You Win! Rock beats Scissors');
            humanScore++;
        }
    } else if(humanChoice === PAPER) {
        if(computerChoice === ROCK) {
            console.log('You Win! Paper beats Rock');
            humanScore++;
        } else if(computerChoice === PAPER) {
            console.log('DRAW!');
        } else if(computerChoice === SCISSORS) {
            console.log('You Lose! Scissors beats Paper');
            computerScore++;
        }
    } else if(humanChoice === SCISSORS) {
        if(computerChoice === ROCK) {
            console.log('You Lose! Rock beats Scissors');
            computerScore++;
        } else if(computerChoice === PAPER) {
            console.log('You Win! Scissors beats Paper');
            humanScore++;
        } else if(computerChoice === SCISSORS) {
            console.log('DRAW!');
        }
    }
}

function rockPaperScissorsGame(roundNumber) {
    // Get Players' Choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Play Round
    console.log(`==ROUND ${roundNumber}==`);
    console.log(`${humanSelection} VS ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`SCORE - Human: ${humanScore} | CPU: ${computerScore}`);
    console.log('===========\n');
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
