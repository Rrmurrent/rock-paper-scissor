var postResults = document.querySelector(".result > p");

var userResult = document.querySelector("#userResult > p");

var gameResult = document.querySelector("#gameResult > p");

// testing switch case for getUser Choice

function getUserChoice() {
  switch (Math.floor(Math.random()*3)) {
    case 0:
      return 'You chose ROCK';
    case 1:
      return 'You chose PAPER';
    case 2: 
      return'You chose Scissors';
  }
};

userResult.innerHTML = (getUserChoice());



  // setting up computer choice
  
  function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
       return 'Opponent chose ROCK';
      case 1:
        return 'Opponent chose PAPER';
      case 2:
       return 'Opponent chose SCISSORS';
    }
   
  };

  postResults.innerHTML = (getComputerChoice());



  function determineWinner(getUserChoice, getComputerChoice) {
    if(getUserChoice === getComputerChoice) {
      return 'game was a tie';
      }
     else if (getUserChoice === 'rock')  {
       if (getComputerChoice === 'paper') {
           return 'Computer Won';
           }
       else {
         return 'You Won';
       }
     }
    else if (getUserChoice === 'paper') {
      if (getComputerChoice === 'scissors') {
        return 'Computer Won';
      }
      else {
        return 'CONGRATULATIONS!! YOU WON! '
      }
    }
    
  };

  gameResult.innerHTML = (determineWinner());
//   Still have more work with this that needs to be done.




  
  
 