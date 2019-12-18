var postResults = document.querySelector(".result > p");

// setting up userChoice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

  //   If/else statmnt
    if (userInput === 'rock'|| userInput ==='paper'|| userInput ===  'scissors') {
      return userInput;
      }
      
      else {
        console.log ('Please chose either: rock, paper, or scissors');
      }
  };

  
  // checking to see if it works
  console.log(getUserChoice('Paper'));
  console.log(getUserChoice('plastic'));
  console.log(getUserChoice('scissors'));
  console.log(getUserChoice('rock'));

   
  
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

//   posting computer choices to html to be seen by player. Still have more work with this that needs to be done.

  postResults.innerHTML = (getComputerChoice(0));
  postResults.innerHTML = (getComputerChoice(1));
  postResults.innerHTML = (getComputerChoice(2));




  
  
 