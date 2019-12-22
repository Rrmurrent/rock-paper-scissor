var postResults = document.querySelector("#compChoice > p");

var userChoice = document.querySelector("#userChoice > p");

var gameResult = document.querySelector("#gameResult > p");


function getUserChoice () {
  var randomNumber = Math.floor(Math.random()*3);
  var choices = ["rock", "scissors", "paper"];
  console.log(randomNumber);
  // console.log(choices);
  console.log(choices[randomNumber])
  return choices[randomNumber];

}
var result = getUserChoice();
console.log(result);

userChoice.innerHTML = (result);
// console.log(getUserChoice());

// ------------------------------------------------------------------
// document.getElementById ('userChoice').innerHTML = getUserChoice();

// userChoice.innerHTML = (getUserChoice());

// --------------------------------------------------------------
// testing switch case for getUser Choice

// function getUserChoice() {
//   switch (Math.floor(Math.random()*3)) {
//     case 0:
//       return 'You chose rock';
//     case 1:
//       return 'You chose paper';
//     case 2: 
//       return'You chose Scissors';
//   }
// };

          // Came across this:  you should only use switch as a conditional for specific values. 
          // You cannot test conditions such as (1<3) or anything like that.
          // You cannot use comparative operators in a switch statement, use if/else statements instead."
// getUserChoice();
// userResult.innerHTML = (getUserChoice());
// console.log(getUserChoice());



  // setting up computer choice
  
  // function getComputerChoice() {
  //   switch (Math.floor(Math.random() * 3)) {
  //     case 0:
  //      return 'Opponent chose ROCK';
  //     case 1:
  //       return 'Opponent chose PAPER';
  //     case 2:
  //      return 'Opponent chose SCISSORS';
  //   };

  // };
  // getComputerChoice();
  // postResults.innerHTML = (getComputerChoice());
  // console.log(getComputerChoice());


  // function determineWinner(getUserChoice, getComputerChoice) {
  //   if(getUserChoice === getComputerChoice) {
  //     return 'game was a tie';
  //     }
  //    else if (getUserChoice === 'rock')  {
  //      if (getComputerChoice === 'paper') {
  //          return 'Computer Won';
  //          }
  //      else {
  //        return 'You Won';
  //      }
  //    }
  //   else if (getUserChoice === 'paper') {
  //     if (getComputerChoice === 'scissors') {
  //       return 'Computer Won';
  //     }
  //     else {
  //       return 'CONGRATULATIONS!! YOU WON! '
  //     }
  //   }
    
  // };

  // gameResult.innerHTML = (determineWinner());
//   Still have more work with this that needs to be done.

