class Letter {
    constructor(letter) {

        // A string value to store the underlying character for the letter
        this.letter = letter;
        // A boolean value that stores whether that letter has been guessed yet
        this.guessed = false;

    }
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    guesses() {

        if (this.guessed === true) {

            return this.letter;
        }

        else {

            return "_";
        }

    }

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    check(guess) {

        if (guess === this.letter) {

            this.guessed = true;
        }


    }




}

// var letter = new Letter("a");

// console.log(letter);

// console.log(letter.guesses());
// console.log(letter.check("c"));
// console.log(letter.guesses());
// console.log(letter.check("a"));
// console.log(letter.guesses());
// console.log(letter);
module.exports = Letter;