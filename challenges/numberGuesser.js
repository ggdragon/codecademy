/* In this project, you’ll write JavaScript functions to power a 
small guessing game. Your code will run in the browser instead of 
just the terminal, but you have an output section to help you test 
your functions and show you if you have syntax errors.

In this project, you’ll write four functions in script.js. 
We’ve provided some additional JavaScript code in game.js that 
will call your functions based on user interactions, but you 
don’t need to look at game.js and shouldn’t edit it if you want 
your project to work as intended. As you complete this project, 
make sure that all of your functions are named exactly as specified 
so that they can be called correctly when the game is played. */


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
