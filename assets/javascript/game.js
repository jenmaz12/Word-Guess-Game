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
var inWord = false;
// create spaces for each character of current word
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);

// when the user presses a key, ensure key is lower case
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
}
// Boolean variable for whether or not the userGuess is in the computer word; starts as false

var foundinword = computerWord.search(userGuess);
var wrongguesses = document.getElementById("wrong-guesses");

for (var i=0; i < computerWord.length; i++) {
    if (foundinword===-1) {
        inWord = false;
        wrongGuess.push(userGuess);
        wrongguesses.textContent = wrongGuess;
    }
    else {
        inWord = true;
        document.getElementById("currentWord").charAt(foundinword) = userGuess;
    }
}
}