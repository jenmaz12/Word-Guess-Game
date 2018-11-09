// load window first
window.onload = function() {
// define word bank array
var wordbank = ["chocolate","caramel","gumdrop","lollipop","licorice","taffy","toffee","skittles","smarties","twix","snickers","raisinets"];
// define user life points at start
var lifepoints = 12;
// define array for wrong guesses to be pushed to
var wrongGuess = [];
// computer randomly selects word from word bank for current word
var computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
var userGuess;
// Boolean variable for whether or not the userGuess is in the computer word; starts as false
var inWord = false;
// create spaces for each character of current word
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);

// when the user presses a key, ensure key is lower case
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();

// define foundinword as index number where userGuess is or is not (-1) in the computerword
var foundinword = computerWord.search(userGuess);
var wrongguesses = document.getElementById("wrong-guesses");

    if (foundinword===-1) {
        inWord = false;
        wrongGuess.push(userGuess);
        wrongguesses.textContent = wrongGuess;
    }
    else {
        inWord = true;
        var placeholderword = document.getElementById("currentWord").innerHTML;
        var placeholderArray = placeholderword.split(" ");
        placeholderArray[foundinword] = userGuess;
        document.getElementById("currentWord").innerHTML = placeholderArray.join(" ");
    }

}
}