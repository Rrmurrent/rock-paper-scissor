var postResults = document.querySelector("#compChoice > p");

var userChoice = document.querySelector("#userChoice > p");

var gameResult = document.querySelector("#gameResult > p");



function chosePaper() {
console.log('This is working, you chose paper');
userChoice.innerHTML= "you chose paper";
return('You Chose Paper');

}

 function choseRock() {
  console.log('This is working, you chose rock');
  userChoice.innerHTML= "you chose rock";

 };

function choseScissors() {
  console.log('This is working, you chose Scissors');
  userChoice.innerHTML= "you chose Scissors";

 };

// function getUserChoice () {
//   var randomNumber = Math.floor(Math.random()*3);
//   var choices = ["rock", "scissors", "paper"];
//   console.log(randomNumber);
//   // console.log(choices);
//   console.log(choices[randomNumber])
//   return ('You chose' + ' ' + choices[randomNumber]);

// }

function getComputerChoice() {
  var computerRandomChoice =  Math.floor(Math.random()*3);
  var compChoices = ["rock", "scissors", "paper"];
  console.log(computerRandomChoice);
  console.log(compChoices[computerRandomChoice])
  return ('Computer chose' + ' ' + compChoices[computerRandomChoice]);
}

var computerChoice = getComputerChoice();
console.log(computerChoice);
postResults.innerHTML = (computerChoice);



  // function determineWinner(getUserChoice, getComputerChoice) {
  // if ((getUserChoice === 'rock') || (getComputerChoice === 'paper')) {
  //          return 'Computer Won';
  //    }

  //    else if ((getUserChoice === 'rock') || (getComputerChoice === 'rock')) {
       
  //     return 'It was a tie';

  //   }

  //   else if ((getUserChoice === 'rock') || (getComputerChoice === 'scissors')) {
       
  //     return 'You Won';
  //   }
  //   else if ((getUserChoice === 'paper') || (getComputerChoice === 'scissors')) {
       
  //     return 'Computer Won';
  //   }
  //   else if ((getUserChoice === 'paper') || (getComputerChoice === 'rock')) {
  //     return 'You Win';
  //   }
    
  //   else if ((getUserChoice === 'paper') || (getComputerChoice === 'paper')) {
  //     return 'It was a tie';
  //   }
    
  //   else if ((getUserChoice === 'scissors') || (getComputerChoice === 'rock')) {
  //     return 'Computer Wins';
  //   }
  //   else if ((getUserChoice === 'scissors') || (getComputerChoice === 'paper')) {
  //     return 'You win';
  //   }
  //   else if ((getUserChoice === 'scissors') || (getComputerChoice === 'scissors')) {
  //     return 'It was a tie';
  //   }
  //   else {
  //     return 'You have an error? I think?'
  //   }
  // }


  // gameResult.innerHTML = (determineWinner());



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
  

//   Still have more work with this that needs to be done.




  
  
 
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