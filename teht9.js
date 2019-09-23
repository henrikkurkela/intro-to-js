
//  GuessAWord.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2018-10-09 Last modification.

var word_to_be_guessed = ["VIENNA", "HELSINKI", "COPENHAGEN", "LONDON", "BERLIN", "AMSTERDAM"];
var number_of_words = [0, 0, 0, 0, 0, 0];
var random_word_index = Math.floor(Math.random() * word_to_be_guessed.length);
var number_of_guesses = 0;

var guessed_characters = [];

// After the following loop has been executed, the array of guessed
// characters will contain as many strings "-" as there are characters
// in the word to be guessed.

for (var string_counter = 0;
    string_counter < word_to_be_guessed[random_word_index].length;
    string_counter++) {
    guessed_characters.push("-");
}

process.stdout.write("\n This is a GUESS-A-WORD game.  \n"
    + "\n Each hyphen sign '-' below hides a letter of a word."
    + "\n Try to guess the letters or the word.\n Type '-quit' to exit the game.\n\n");

process.stdout.write(" " + guessed_characters.join("")
    + "  Give a character or word: ");

process.stdin.on("data", function (input_from_user) {
    var player_input = input_from_user.toString().trim().toUpperCase();
    number_of_guesses += 1;
    if (player_input == "-QUIT") {
        console.log(" Good bye!\n [Word]: [Guesses]");
        for (let i in word_to_be_guessed){
            if (number_of_words[i] > 0)console.log(" " + word_to_be_guessed[i] + ": " + number_of_words[i]);
        }
        process.exit();
    }

    if (player_input.length == 1) {
        for (var character_index in word_to_be_guessed[random_word_index]) {
            if (word_to_be_guessed[random_word_index][character_index] == player_input[0]) {
                guessed_characters[character_index] = player_input[0];
            }
        }

        if (guessed_characters.indexOf("-") == -1) {
            // "-" is not a string in guessed characters.
            // This means that all characters have been guessed.

            process.stdout.write(" " + guessed_characters.join("")
                + "  Congratulations! \nNumber of guesses: " + number_of_guesses + "\n");
            number_of_words[random_word_index] += number_of_guesses;
            reset_globals();
        }
    }
    else if (player_input.length > 1) {
        // The player tried to guess the whole word.

        if (player_input == word_to_be_guessed[random_word_index]) {
            process.stdout.write("\n Congratulations! \nNumber of guesses: " + number_of_guesses + "\n");
            number_of_words[random_word_index] += number_of_guesses;
            reset_globals();
        }
    }
    else {
        process.stdout.write(" \n Game interrupted. \n\n");
        process.exit();  // No valid input. Let's terminate the game.
    }

    // The playing of the game will continue.
    // Let's display the current status of guessed characters.
    process.stdout.write(" " + guessed_characters.join("")
        + "  Give a character or word: ");

});

function reset_globals() {
    random_word_index = Math.floor(Math.random() * word_to_be_guessed.length);
    number_of_guesses = 0;
    guessed_characters = [];
    process.stdout.write("\n This is a GUESS-A-WORD game.  \n"
        + "\n Each hyphen sign '-' below hides a letter of a word."
        + "\n Try to guess the letters or the word.\n Type '-quit' to exit the game.\n\n");

    for (var string_counter = 0;
        string_counter < word_to_be_guessed[random_word_index].length;
        string_counter++) {
        guessed_characters.push("-");
    }
}

/*  NOTES:

// The following statement would be an alternative way to create the array
// that contains as many strings "-" as is the length of the word to be guessed.
// It first creates a string that contains only hyphen characters. Then this
// string is converted to an array of single-character strings.

// var guessed_characters = Array.from( "-".repeat( word_to_be_guessed.length ) ) ;

*/