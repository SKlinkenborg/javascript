/*
Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.
    If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

    Get the user’s choice.
    Get the computer’s choice.
    Compare the two choices and determine a winner.
    Start the program and display the results.
*/

const winMessage = "You're the winner! So skillful!"
const loseMessage = "Talentless fool. You lose."

/*
When getting the user’s choice, you should also check to make sure that the user typed 
a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
*/
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput;
};

/*
Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters.
Inside its block, utilize Math.random() and Math.floor() to get a whole number
 between 0 and 2. 
 Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
*/
const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3);
    let choice = ''
    switch (randNum) {
      case 0:
        choice = 'rock';
        break;
      case 1:
        choice = 'paper';
        break;
      case 2:
        choice = 'scissors';
        break;
      default:
        console.log('uhhhh wtf?');
    }
    return choice;
  };

// Compate user choice to to computer choice to determine winner, and check for cheat code
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie! OMG';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return loseMessage;
    }
      else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return winMessage;
    }
      else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return loseMessage;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return winMessage;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return winMessage;
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return loseMessage;
    } else if (userChoice === 'bomb') {
      return 'OH NO IT\S A BOMB! DUCK!!';
    } else {
        return 'I uhh...hadn\'t thought of that one..';
    }
}

// Package into a neat gameplay loop function
function playGame() {
    let userChoice = getUserChoice(userInput);
    userChoice === "bomb" ? console.log(winMessage) : {};
    console.log('User has selected ' + userChoice);
    let computerChoice = getComputerChoice();
    console.log('ChatGPT88 has selected ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }

const userInput = 'bomb'
 playGame()