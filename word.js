var Letter = require("./Letter.js"); 
// An array of new Letter objects representing the letters of the underlying word



class Word { 

    constructor(word){

    this.wordArray = [];

    for (i =0; i < word.length; i++){

var newWord = new Letter(word[i]);

this.wordArray.push(newWord)

    }

   
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

this.wordLetters = function(){


   this.displayArray = [];

   for (i =0; i < wordArray.length; i++){

    var displayLetter = this.wordArray[i].guesses();

  this.displayArray.push(displayLetter)


   }
}

console.log(this.displayArray);
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

this.checker = function(guessedLet){


    for (i =0; i < wordArray.length; i++){

        this.wordArray[i].check(guessedLet)

       
}



    }
}