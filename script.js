let humanScore = 0;
let computerScore = 0;
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

// game elements
const newGame = document.querySelector('#new-game');
const playButton = document.querySelector('#play');
const announcer = document.querySelector('.announcement');

// choices
const choices = document.querySelector('.choices');
const gameChoices = document.querySelector('.game-choices');
const playerOneChoice = document.querySelector('.player-1-choice');
const cpuChoice = document.querySelector('.player-2-choice');
const choiceButtons = Array.from(document.querySelectorAll('.game-choices button'));

// score
const playerOneScore = document.querySelector('#p1-score');
const cpuScore = document.querySelector('#cpu-score');

// players
const playersContainer = document.querySelector('.players-container');
const playerNameContainer = document.querySelector('.player-name-container');
const playerNameInput = document.querySelector('#player-name-input');
const playerOneName = document.querySelector('.player-1 .name');
const cpuName = document.querySelector('.cpu .name');

function playRound(humanChoice, computerChoice) {
    const humanWin = humanWinsTheRound(humanChoice, computerChoice);
    if(humanChoice === computerChoice) {
        announcer.textContent = 'DRAW! No one got a point!';
    }
    else if(humanWin) {
        announcer.textContent = `You get a point! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        announcer.textContent = `CPU gets a point! ${computerChoice} beats ${humanChoice}`;
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
    playerOneChoice.textContent = selections[humanSelection];

    const computerSelection = getComputerChoice();
    cpuChoice.textContent = selections[computerSelection];

    playRound(humanSelection, computerSelection);
}

function toggleDisplays() {
    playerNameContainer.classList.toggle('display-none');
    gameChoices.classList.toggle('display-none');
}

newGame.addEventListener('click', e => {
    console.log(`RESET SCORES you: ${humanScore} and cpu: ${computerScore}`);
    humanScore = computerScore = 0;
    playerNameInput.value = '';
    playerOneScore.textContent = cpuScore.textContent = '0';
    playerOneName.textContent = cpuName.textContent = '';
    playerOneChoice.textContent = cpuChoice.textContent = '';
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
    if(playerNameInput.value) {
        toggleDisplays();
        playerOneName.textContent = playerNameInput.value;
        cpuName.textContent = 'CPU';
        announcer.textContent = 'Please choose one from the selections before the game starts.';
        newGame.removeAttribute('disabled');
    }
});

gameChoices.addEventListener('click', e => {
    rockPaperScissorsGame(e.target.id);
    playerOneScore.textContent = humanScore;
    cpuScore.textContent = computerScore;    
    if (humanScore === 5 || computerScore === 5) {
        choiceButtons.forEach(button => button.setAttribute('disabled',''));
        displayGameResult(humanScore,computerScore);
    }
});



