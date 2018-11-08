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

// create spaces for each character of current word
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);


// when the user presses a key, ensure key is lower case and search the computer word for the user's guess
document.onkeyup = function (event) {
    var foundinword = computerWord.search(userGuess);
    var userGuess = event.key.toLowerCase();
}
var inWord = false;

for (var i=0; i < computerWord.length; i++) {
    if (userGuess===computerWord.charAt (i)) {
        inWord = true;
        document.getElementById("currentWord").charAt(i) = userGuess;
    }
    else {
        inWord = false;
        wrongGuess.push(userGuess);
    }
}
}