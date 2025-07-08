let humanScore = 0;
let computerScore = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    // Choices: 1 - Rock, 2 - Paper, 3 - Scissors
    const choiceNumber = Math.floor(Math.random() * 3) + 1;
    return choiceNumber === 1 ? ROCK : 
           choiceNumber === 2 ? PAPER : 
           SCISSORS;
}

function getHumanChoice() { 
    return prompt('Enter your choice (rock, paper, scissors only): ');
}

function playRound(humanChoice, computerChoice) {
    const humanWinsTheRound = (humanChoice === ROCK) && (computerChoice === SCISSORS) ||
                              (humanChoice === PAPER) && (computerChoice === ROCK) ||
                              (humanChoice === SCISSORS) && (computerChoice === PAPER);

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
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

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
    for(let round = 1; round <= 5; round++) {
        rockPaperScissorsGame(round);
    }
    console.log('========');
    displayGameResult(humanScore, computerScore);
    console.log(`FINAL SCORE - Human: ${humanScore} | CPU: ${computerScore}`);
}

playGame();