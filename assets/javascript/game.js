// load window first
window.onload = function() {
// define word bank array
var wordbank = ["chocolate","caramel","gumdrop","lollipop","licorice","taffy","toffee","skittles","smarties","twix","snickers","raisinets"];
// define user life points at start and minimum lifepoints (0)
var lifepoints = 12;
var winCount = 0;
// define array for wrong guesses to be pushed to
var wrongGuess = [];
// computer randomly selects word from word bank for current word
var computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
var userGuess;
// Boolean variable for whether or not the userGuess is in the computer word; starts as false
var inWord = false;
// create spaces for each character of current word
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);

// show beginning life points
document.getElementById("lifePoints").innerHTML= "Lifepoints: " + lifepoints;

document.getElementById("winCount").innerHTML= winCount;

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
        if (lifepoints>0) {
            lifepoints = lifepoints - 1;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
        }
        else if (lifepoints<=0) {
            alert("You lose!");
            location.reload();
        }
        
    } else {
        inWord = true;
        var placeholderword = document.getElementById("currentWord").innerHTML;
        var placeholderArray = placeholderword.split(" ");
        // if lifepoints are greater than zero, subtract 1 for each guess
        if (lifepoints>0) {
            lifepoints = lifepoints - 1;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
        }
        else if (lifepoints<=0) {
            alert("You lose!");
            location.reload();
        }
        // loop through the length of the computerword
        for (var i=0; i<computerWord.length; i++) {
            // split computerword while in the loop
            var wordArray = computerWord.split("");
            // if userGuess equals the index of the split up computerword
            if (userGuess===wordArray[i]) {
                // then placeholder array equal userGuess
                placeholderArray[i]=userGuess;
            }
            document.getElementById("currentWord").innerHTML = placeholderArray.join(" ");
            if (placeholderArray.indexOf("__")===-1 && lifepoints>=0) {
                document.onload = alert("You win!!");
                location.reload();
                document.getElementById("wincount").innerHTML = winCount + 1;
            }
        }   

    };
};
};