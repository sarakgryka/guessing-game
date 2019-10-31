var Word = require("./word.js");
var inquirer = require('inquirer');


// Randomly selects a word and uses the Word constructor to store it

let wordChoices = ["dog", "cat", "horse", "pig"]

let randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let game = new Word(randomWord);



// function startGame (){

// let randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
// let game = new Word(randomWord);


//  console.log(randomWord);
 
     askQuestions();
 
 
 

// }
// console.log(game);
// Prompts the user for each guess and keeps track of the user's remaining guesses


function askQuestions() {
    game.wordLetters();
    if (game.displayArray.indexOf("_") === -1) {

        console.log("Good Job!")
        // startGame();
       
        
        
    }
    else {
        inquirer
            .prompt([{

                type: "input",
                name: "letterGuess",
                message: "Please guess a letter"

            }

            ])
            .then(answers => {

                game.checker(answers.letterGuess);
               
                askQuestions();
            })
    }


};

