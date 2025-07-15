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

function humanWinsTheRound(humanChoice, computerChoice) {
    return  (humanChoice === ROCK) && (computerChoice === SCISSORS) ||
            (humanChoice === PAPER) && (computerChoice === ROCK) ||
            (humanChoice === SCISSORS) && (computerChoice === PAPER);
}

const newGame = document.querySelector('#new-game');
const player1Name = document.querySelector('.player-name');
const playButton = document.querySelector('#play');
const playerInput = document.querySelector('#player');
const player1 = document.querySelector('.player-1 .name');
const cpu = document.querySelector('.cpu .name');
const announcer = document.querySelector('.announcement');

// choices
const choices = document.querySelector('.choices');
const gameChoices = document.querySelector('.game-choices');
const p1Choice = document.querySelector('.player-1-choice');
const cpuChoice = document.querySelector('.player-2-choice');
const choiceButtons = Array.from(document.querySelectorAll('.game-choices button'));

// score
const p1Score = document.querySelector('#p1-score');
const cpuScore = document.querySelector('#cpu-score');

// const counter = document.querySelector('#counter');
const playersContainer = document.querySelector('.players-container');
// let intervalId;

// const makeCounter = (start) => {
//     return () => {
//         if(start === 1) clearInterval(intervalId);
//         counter.textContent = start;
//         start--;
//     };
// };

// const beginCountDown = () => {
//     intervalId = setInterval(makeCounter(3), 1000);
// };

function playRound(humanChoice, computerChoice) {
    const humanWin = humanWinsTheRound(humanChoice, computerChoice);
    if(humanWin) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function displayGameResult(humanScore, cpuScore) {
    if(humanScore === cpuScore) {
        announcer.textContent = 'The Game is a DRAW!';
    } else if(humanScore < cpuScore) {
        announcer.textContent = 'Computer Wins the game!';
        announcer.classList.toggle('lose');
    } else {
        announcer.textContent = 'Congrats! You win the game!';
        announcer.classList.toggle('win');
    }
}

function rockPaperScissorsGame(humanChoice) {
    const selections = {rock: '🪨', paper: '📜', scissors: '✂'};

    const humanSelection = humanChoice.toLowerCase();
    p1Choice.textContent = selections[humanSelection];

    const computerSelection = getComputerChoice();
    cpuChoice.textContent = selections[computerSelection];

    playRound(humanSelection, computerSelection);
}

gameChoices.addEventListener('click', e => {
    announcer.textContent = 'First to get 5 points wins the game.';
    rockPaperScissorsGame(e.target.id);
    p1Score.textContent = humanScore;
    cpuScore.textContent = computerScore;    
    if (humanScore === 5 || computerScore === 5) {
        choiceButtons.forEach(button => button.setAttribute('disabled',''));
        displayGameResult(humanScore,computerScore);
    }
});

function toggleDisplays() {
    player1Name.classList.toggle('display-none');
    gameChoices.classList.toggle('display-none');
}

newGame.addEventListener('click', e => {
    console.log(`RESET SCORES you: ${humanScore} and cpu: ${computerScore}`);
    humanScore = computerScore = 0;
    playerInput.value = '';
    p1Score.textContent = cpuScore.textContent = '0';
    player1.textContent = cpu.textContent = '';
    p1Choice.textContent = cpuChoice.textContent = '';
    announcer.textContent = 'Enjoy the game!';
    choices.classList.remove('display-none');
    announcer.classList.remove('lose');
    announcer.classList.remove('win');
    newGame.setAttribute('disabled', '');
    choiceButtons.forEach(button => button.removeAttribute('disabled'));
    toggleDisplays();
});

playButton.addEventListener('click', e => {
    console.log('pressed');
    if(playerInput.value) {
        toggleDisplays();
        player1.textContent = playerInput.value;
        cpu.textContent = 'CPU';
        announcer.textContent = 'Please choose one from the selections before the game starts.';
        newGame.removeAttribute('disabled');
    }
});



