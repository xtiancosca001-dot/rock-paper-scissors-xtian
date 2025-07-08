let humanScore = 0;
let computerScore = 0;
const NUM_ROUNDS = 5;
const NUM_CHOICES = 3;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    // Choices: 1 - Rock, 2 - Paper, 3 - Scissors
    const choiceNumber = Math.floor(Math.random() * NUM_CHOICES) + 1;
    return choiceNumber === 1 ? ROCK : 
           choiceNumber === 2 ? PAPER : 
           SCISSORS;
}

function getHumanChoice() { 
    return prompt('Enter your choice (rock, paper, scissors only): ');
}

function humanWinsTheRound(humanChoice, computerChoice) {
    return  (humanChoice === ROCK) && (computerChoice === SCISSORS) ||
            (humanChoice === PAPER) && (computerChoice === ROCK) ||
            (humanChoice === SCISSORS) && (computerChoice === PAPER);
}

function playRound(humanChoice, computerChoice) {
    const humanWin = humanWinsTheRound(humanChoice, computerChoice);
    if(humanChoice === computerChoice) {
        console.log('DRAW');
    } else if(humanWin) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function rockPaperScissorsGame(roundNumber) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`==ROUND ${roundNumber}==`);
    console.log(`${humanSelection} VS ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`SCORE (R${roundNumber}) - Human: ${humanScore} | CPU: ${computerScore}`);
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
    for(let round = 1; round <= NUM_ROUNDS; round++) {
        rockPaperScissorsGame(round);
    }
    console.log('========');
    displayGameResult(humanScore, computerScore);
    console.log(`FINAL SCORE - Human: ${humanScore} | CPU: ${computerScore}`);
}

playGame();