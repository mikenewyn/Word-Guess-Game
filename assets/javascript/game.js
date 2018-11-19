


var words = [
    "northshore",
    "poke",
    "sushi",
    "ahi",
    "island",
    "sunset",
    "dukes",
    "waves",
    "surfing",
    "beach",
    "luau",
    "tsunami",
    "turtle",
    "dolphin",
    "whale",
    "seal",
    "sea lion",
    "shell",
    "sand",
    "sunrise",
    "beach",
    "vacation",
    "aloha",
    "waimea",
    "waterfall",
    "maunawili",
    "paradise",
    ];
    
    var wins = 0;
    var wrongLetters = [];
    var maxLives = 8;
    var lives = maxLives;
    var word = words[Math.floor(Math.random() * words.length)];
    var puzzle = document.getElementById("puzzle")
    var livesElem = document.getElementById("remaining")
    var winsElem = document.getElementById("wins")
    var wrongLettersElem = document.getElementById("incorrect")
    var answerArray = [];
    var remainingLetters = word.length;

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    
    function update(wins, lives, wrongLetters){
        livesElem.innerHTML = lives;
        winsElem.innerHTML = wins;
        wrongLettersElem.textContent = wrongLetters.join(" ");
        puzzle.textContent = answerArray.join(" ");
    }
    
    function reset(){
    lives = maxLives;
    wrongLetters = [];
    answerArray = [];
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    remainingLetters = word.length;
    
    }
    
    alert("Try to guess the character.")

        
    
        while (remainingLetters > 0) {

        // Show the player what they have guessed
        
        puzzle.textContent = answerArray.join(" ");
        alert(answerArray.join(" "));
      
        //  Get a new guess from the player
    
        document.onkeyup = function(event) {
            var guess = event.key;
            var goodGuess = false
            for (var j=0; j < word.length; j++){
                if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                        goodGuess = true;
                }
            }
            if (!goodGuess){
                wrongLetters.push(guess); 
                lives--;
                update(wins, lives, wrongLetters)
            }
    
             if (remainingLetters === 0){
                wins ++ 
                setTimeout(win, 500)
                
            }
            if (lives === 0){
                setTimeout(lose, 500)
            }
            update(wins, lives, wrongLetters)
        }
    
    
    function win() {
        alert("You Win!")
        reset()
        update(wins, lives, wrongLetters)
    }
        function lose() {
            reset()
            update(wins, lives, wrongLetters)
            alert("You Lose!")
        }
    
        
    
        var guess = prompt("Guess a letter, or click cancel to quit.");
    
        quitGame {
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("Please enter a single letter.");
            }
    
    else {
        for (var j=0; j < word.length; j++){
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
        }
    
    alert(answerArray.join(" "));
    alert("Great Job! The answer was " + word)}
