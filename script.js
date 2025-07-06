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