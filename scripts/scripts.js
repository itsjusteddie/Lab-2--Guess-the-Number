console.log("Whoa!");
//set aside a space named answer that has 48 in it
//makes variable called answer with value of 48

let answer = Math.floor(Math.random() * 100) + 1;

let guesses = ""; 
let wins = 0;
let losses = 0;

let triesleft = 7;
let resetButton = document.querySelector("#resetButton");
let scoreMessage = document.querySelector("#scoreMessage");

const winMessage = "You win!";
const lowMessage = "Too low!";
const highMessage = "Too high!";
const Error = "Please enter a number between 1 and 99";

//lookup element with an id of guessMessage and set it to a variable 
// called guess Message within this javascript file
 
let guessMessage = document.querySelector("#guessMessage");

let guessButton = document.querySelector("#guessButtons");
//if you put showWin() in the parentheses, it will run the function immediately
//  when the page loads. Instead of when it meets the requirement of the event
//guessButton.addEventListener("click", showWin);
//shorthand

guessButton.addEventListener('click', function() {
 
guesses += guessInput.value + " ";

    if(guessInput.value < 1 || guessInput.value > 100) {
        guessMessage.textContent = Error;
        guessMessage.style.color = "red";
        console.log("Error Out of bounds");
    }

    else{
        if(guessInput.value == answer) {

            guessMessage.textContent = winMessage;

            guessMessage.style.color = "green";
            wins++;
            console.log("You win!");
            scoreMessage.textContent = "Wins: " + wins + " | Losses: " + losses;

        }
        if (guessInput.value < answer) {
            guessMessage.textContent = lowMessage;
            guessMessage.style.color = "red";
            console.log("Too low!");    
        }

          if (guessInput.value > answer) {
            guessMessage.textContent = highMessage;
            guessMessage.style.color = "red";
            console.log("Too High!");    
        }
    }
       //triesleft = triesleft - 1;
        triesleft -= 1;
        console.log(triesleft);

        if(triesleft == 0 && guessInput.value != answer) {
            guessMessage.textContent = "You lose! The answer was " + answer;
            guessMessage.style.color = "red";
            console.log("You lose!");
            losses++;
            scoreMessage.textContent = "Wins: " + wins + " | Losses: " + losses;

            guessButton.disabled = true;
            resetButton.disabled = false;
          }
          //added at the end so triesleft = 0 wont run and auto end game
          //on a win once its set back to 0

          if(guessInput.value == answer) {
            triesleft = 0;
            guessButton.disabled = true;
            resetButton.disabled = false;
        }

        guessMessage.textContent += " You have " + triesleft + " tries left.";
        guessMessage.textContent += " You guessed: " + guesses;
    });

    resetButton.addEventListener('click', function() {
        guessButton.disabled = false;
        guessMessage.textContent = "Enter a number between 1 and 100";
        triesleft = 7;
        guesses = "";
        resetButton.disabled = true;
        guessMessage.style.color = "black";

    });
  
let guessInput =  document.querySelector("#guessInput");