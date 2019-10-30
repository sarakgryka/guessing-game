var Word = require("./word.js");
var inquirer = require('inquirer');


// Randomly selects a word and uses the Word constructor to store it

let wordChoices = ["dog", "cat", "horse", "pig"]

let randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

console.log(randomWord);

let game = new Word(randomWord);

console.log(game);
// Prompts the user for each guess and keeps track of the user's remaining guesses


inquirer
    .prompt([{

        type: "input",
        name: "letterGuess",
        message: "Please guess a letter"

    }
       
    ])
    .then(answers => {
    game.checker(answers.letterGuess);
    game.wordLetters();


    });