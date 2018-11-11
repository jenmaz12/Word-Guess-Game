// winCount starts at 0
var winCount = 0;
// load window first
window.onload = function() {
// define word bank array
var wordbank = ["chocolate","caramel","gumdrop","lollipop","licorice","taffy","toffee","skittles","smarties","twix","snickers","raisinets","fudge","butterfinger","dots","crunch","starburst","payday"];
// define user life points at start
var lifepoints = 12;

// define array for wrong guesses to be pushed to
var wrongGuess = [];
// computer randomly selects word from word bank for current word
var computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
// declare userGuess variable
var userGuess;
// Boolean variable for whether or not the userGuess is in the computer word; starts as false
var inWord = false;
// create spaces for each character of current word
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);

// show beginning life points
document.getElementById("lifePoints").innerHTML= "Lifepoints: " + lifepoints;

document.getElementById("winCount").innerHTML= winCount;

var placeholderword = document.getElementById("currentWord").innerHTML;
var placeholderArray = placeholderword.split(" ");

// when the user presses a key, ensure key is lower case
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();

    // define foundinword as index number where userGuess is or is not (-1) in the computerword
    var foundinword = computerWord.search(userGuess);
    var wrongguesses = document.getElementById("wrong-guesses");

    // if the index of the userGuess in computerWord is -1, it is not in the word
    if (foundinword===-1) {
        inWord = false;
        // userGuess is added to wrongGuess array
        wrongGuess.push(userGuess);
        // wrongGuess array is shown in wrongguesses p element
        wrongguesses.textContent = wrongGuess;
        // if the user's lifepoints are greater than 0, one will be deducted for each guess and new total displayed
        if (lifepoints>0) {
            lifepoints = lifepoints - 1;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
        }
        // if lifepoints are less than or equal to zero then the user receives a "You lose!" alert and page reloads
        else if (lifepoints<=0) {
            alert("You lose!");
            computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
            document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);
            placeholderword = document.getElementById("currentWord").innerHTML;
            placeholderArray = placeholderword.split(" ");
            wrongGuess = [];
            document.getElementById("wrong-guesses").innerHTML = wrongGuess;
            lifepoints = 12;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
            winCount = 0;
            document.getElementById("winCount").innerHTML= winCount;
        }
        
    } else {
        inWord = true;
        
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
            }
        // if there are no more __ in the placeholder array and the user has 0 or positive lifepoints left, the user has guessed all of the letters in the word and has won
        if (placeholderArray.indexOf("__")===-1 && lifepoints>=0) {
            // alert user they won
            alert("You win!!");
            // choose a new word
            computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
            // increase winCount by 1
            winCount++
            // print new winCount
            document.getElementById("winCount").innerHTML = winCount;
            // print blanks for new word
            document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);
            // reset placeholderword to new currentWord
            placeholderword = document.getElementById("currentWord").innerHTML;
        //    reset placeholderArray
            placeholderArray = placeholderword.split(" ");
            // empty wrong guess array and print to screen
            wrongGuess = [];
            document.getElementById("wrong-guesses").innerHTML = wrongGuess;
            // reset lifepoints and print to screen
            lifepoints = 12;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
            console.log(winCount);
        }  
        // if lifepoints are greater than zero, subtract 1 for each guess
        else if (lifepoints>0 && placeholderArray.indexOf("__")>-1) {
            lifepoints = lifepoints - 1;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
            
        }
        else if (lifepoints<=0 && placeholderArray.indexOf("__")>-1) {
            alert("You lose!");
            computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
            document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);
            placeholderword = document.getElementById("currentWord").innerHTML;
            placeholderArray = placeholderword.split(" ");
            wrongGuess = [];
            document.getElementById("wrong-guesses").innerHTML = wrongGuess;
            lifepoints = 12;
            document.getElementById("lifePoints").innerHTML = "Lifepoints: " + lifepoints;
            winCount = 0;
            document.getElementById("winCount").innerHTML= winCount;
        }
        
         

    };
};
};