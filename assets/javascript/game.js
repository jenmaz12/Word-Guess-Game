var wordbank = ["chocolate","caramel","gumdrop","lollipop","licorice","taffy","toffee","skittles","smarties","twix","snickers","raisinets"];
var lifepoints = 12;
var wrongGuess = [];
var computerWord;

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var computerWord = wordbank[Math.floor(Math.random()*wordbank.length)];
    var foundinword = computerWord.search(userGuess);
}
var inWord = false;
for (var i=0, i<computerWord.length, i++) {
    if (userGuess===computerWord.charAt (i)) {
        inWord = true;
        
    }
}