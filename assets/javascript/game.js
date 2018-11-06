var wordbank = ["chocolate","caramel","gumdrop","lollipop","licorice","taffy","toffee","skittles","smarties","twix","snickers","raisinets"];
var lifepoints = 12;
var wrongGuess = [];
var computerWord;
var computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
document.getElementById("currentWord").innerHTML = "__ ".repeat(computerWord.length);


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var foundinword = computerWord.search(userGuess);
    
}
var inWord = false;

for (var i=0, i < computerWord.length, i++) {
    if (userGuess===computerWord.charAt (i)) {
        inWord = true;
        document.getElementById("currentWord").innerHTML = userGuess
    }
    else {

    }
}