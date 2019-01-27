// load window first
window.onload = function () {
    // define word bank array
    let wordbank = ["chocolate", "caramel", "gumdrop", "lollipop", "licorice", "taffy", "toffee", "skittles", "smarties", "twix", "snickers", "raisinets", "fudge", "butterfinger", "dots", "crunch", "starburst", "payday"];
    // define user life points at start
    let lifepoints;
    // winCount starts at 0
    let winCount = 0;
    // define array for wrong guesses to be pushed to
    let wrongGuess;
    let computerWord;
    // declare userGuess variable
    let userGuess;
    let placeholderArray;
    let letters;

    function startGame() {
        wrongGuess = [];
        lifepoints = 12;
        // computer randomly selects word from word bank for current word
        computerWord = wordbank[Math.floor(Math.random() * wordbank.length)];
        // create array of the letters in the current word
        letters = computerWord.split("");
        // empty currentWord div
        $("#currentWord").empty();
        // append blanks for each letter to the currentWord html element
        for (let i = 0; i < letters.length - 1; i++) {
            if (letters[i] !== " ") {
                $("#currentWord").append("__ ");
            }
            else {
                $("#currentWord").append(" ");
            }
        };

        for (let i = letters.length - 1; i < letters.length; i++) {
            $("#currentWord").append("__");
        }
        // show beginning life points
        $("#lifePoints").html("Lifepoints: " + lifepoints);
        // show beginning win count
        $("#winCount").html(winCount);
        // show wrong guesses
        $("#wrong-guesses").html(wrongGuess);
        let placeholderword = document.getElementById("currentWord").innerHTML;
        placeholderArray = [];
        placeholderArray = placeholderword.split(" ");
    }
    startGame();
    // when the user presses a key, ensure key is lower case
    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();

        // define foundinword as index number where userGuess is or is not (-1) in the computerword
        let foundinword = computerWord.search(userGuess);
        let wrongguesses = document.getElementById("wrong-guesses");
        lifepoints = lifepoints - 1;
        $("#lifePoints").html("Lifepoints: " + lifepoints);

        // if the index of the userGuess in computerWord is -1, it is not in the word
        if (foundinword === -1) {
            if (wrongGuess.indexOf(userGuess) === -1) {
                inWord = false;
                // userGuess is added to wrongGuess array
                wrongGuess.push(userGuess);
                // wrongGuess array is shown in wrongguesses p element
                wrongguesses.textContent = wrongGuess.join(", ");
                // if the user's lifepoints are greater than 0, one will be deducted for each guess and new total displayed
                if (lifepoints > 0) {

                }
                // if lifepoints are less than or equal to zero then the user receives a "You lose!" alert and page reloads
                else if (lifepoints <= 0) {
                    alert("You lose!");
                    winCount = 0;
                    startGame();
                }
            } else {
                alert("You have already guessed this letter. Try again.")
            }
        } else {
            if (placeholderArray.indexOf(userGuess) > -1) {
                alert("You have already guessed this letter. Try again.")
            } else {
                // loop through the length of the letters array
                for (let i = 0; i < letters.length; i++) {
                    // if userGuess equals the letter at index i in the letters array
                    if (userGuess === letters[i]) {
                        // then placeholder array index i equal userGuess
                        placeholderArray[i] = userGuess;
                    }
                };
                $("#currentWord").html(placeholderArray.join(" "));
                // if there are no more __ in the placeholder array and the user has 0 or positive lifepoints left, the user has guessed all of the letters in the word and has won
                if (placeholderArray.indexOf("__") === -1 && lifepoints >= 0) {
                    // alert user they won
                    alert("You win!!");
                    // increase winCount by 1
                    winCount++
                    // run startGame function
                    startGame();
                } else if (lifepoints <= 0 && placeholderArray.indexOf("__") > -1) {
                    alert("You lose!");
                    winCount = 0;
                    startGame();
                }
            };
        };
    };
};