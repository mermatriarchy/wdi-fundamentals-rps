////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//I combined my code into a single function.
//The while statement was used to build the playToFive function
//and the if-else statement embedded within it was initially my
//getWinner function before I combined the two.

//When this function is called, it repeatedly asks for input
//until either the player or the computer has won five rounds
//and then logs the results to the console. Adding another function
//to alert() the winner of each round could be used to notify the player
//of the outcome of each round during the execution.

var playToFive = function(){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var round = 1;
  while (playerWins < 6 && computerWins < 6){
//Assigning the provided code to a var seemed like the most efficient
//way to use them; alternatively, using these functions would also work:
//function getPlayerMove(move){
//    return move || getInput(); }
//function getComputerMove(move){
//    return move || randomPlay(); }
   var playerMove = getInput();
   var computerMove = randomPlay();
        if (((playerMove === 'rock') && (computerMove === 'scissors')) ||
            ((playerMove === 'scissors') && (computerMove === 'paper')) ||
            ((playerMove === 'paper') && (computerMove === 'rock'))) {
          console.log("Round: " + round + "\nPlayer: " + playerMove +"\nComputer: " + computerMove + "\nScore is " + "\nPlayer: " + playerWins + ", Computer " + computerWins);
          playerWins ++;
          round ++;
        } else if (playerMove === computerMove) {
          console.log("Round: " + round + " \nIt's a tie. \nScore remains \nPlayer: " + playerWins + " Computer: " + computerWins + ".");
          round ++;       
        } else {
          console.log("Round: " + round + "\nPlayer: " + playerMove +"\nComputer: " + computerMove + "\nScore is " + "\nPlayer: " + playerWins + ", Computer " + computerWins);
          computerWins ++;
          round++;
        }
  }
};
playToFive();