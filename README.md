# Hangman: Candy Edition
#### Visit the deployed site [here](https://jenmaz12.github.io/Word-Guess-Game/).
This application uses HTML, CSS, and JavaScript to run a game of hangman. The user starts the game of Hangman: Candy Edition with 12 lifepoints, zero wins, and no wrong guesses. A candy-related word is randomly chosen from an array and is represented to the user with __ for each letter of the word. The user guesses a letter by pressing a key on their keyboard. Every time the user guesses a letter, whether it is in the word or not, they lose a lifepoint. If the letter is in the word, it will take the place of the __ where is it located in the word. If the guessed letter is not in the word, it will be added to the wrong guesses array, which is then displayed in the HTML under Wrong Guesses.

If the user guesses the word before their lifepoints run out, their win count will increase by one and the game will reset with another word randomly chosen from the array. If the user does not guess the word before their lifepoints run out, the game and their win count resets.

![Hangman: Candy Edition](/assets/images/screenshot.png)