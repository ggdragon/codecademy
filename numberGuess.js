let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, target) {
    if (Math.abs(userGuess - target) < Math.abs(computerGuess - target)) return true;
    else if (Math.abs(userGuess - target) > Math.abs(computerGuess - target)) return false;
    else if (Math.abs(userGuess - target) === Math.abs(computerGuess - target)) return true;
}

function updateScore(winner) {
    if (winner === 'human') humanScore ++;
    if (winner === 'computer') computerScore ++;
}

function advancedRound() {
    currentRoundNumber ++;
}


updateScore('human');
console.log(humanScore);

updateScore('computer');
console.log(computerScore);
