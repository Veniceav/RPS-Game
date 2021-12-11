let userScore = 0;
let computerScore = 0;
let myChoice = document.getElementById("mychoice");
let cpuChoice = document.getElementById("cpuchoice");
let uScore = document.getElementById("userScore");
let cScore = document.getElementById("computerScore");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

let userChoice = "";
let computerChoice = "";
let user = "";
let computer = "";

//User Choice
rock.addEventListener("click", function () {
  reset();
  userChoice = "rock";
  myChoice.innerHTML = userChoice;
  console.log("User chose rock!");
  checkCpuChoice();
  compare();
  updateScore();
  getLabel();
});

paper.addEventListener("click", function () {
  reset();
  userChoice = "paper";
  myChoice.innerHTML = userChoice;
  console.log("User chose paper!");
  checkCpuChoice();
  compare();
  updateScore();
  getLabel();
});

scissors.addEventListener("click", function () {
  reset();
  userChoice = "scissors";
  myChoice.innerHTML = userChoice;
  console.log("User chose scissors!");
  checkCpuChoice();
  compare();
  updateScore();
  getLabel();

});

// computer choice

function checkCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNum];
  console.log("computer chose " + computerChoice);
  cpuChoice.innerHTML = computerChoice;
}

//compare

function compare() {
  if (userChoice === computerChoice) {
    return console.log("its a tie!");
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
     user = "win";
      return console.log("User Wins!");
    }
    computer = "win";
    return console.log("comp Wins!");
  } 
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      user = "win";
    return console.log("User Wins!");
    }
     computer = "win";
return console.log("Comp Wins!")
  } 
  
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      user = "win";
      return console.log("User Wins!");
    } 
      computer = "win";
    return console.log("Comp Wins!");
  }
}

//score update
const updateScore = () => {
  if (user === "win") {
    userScore++;
  } else if (computer === "win") {
    computerScore++;
} uScore.innerHTML = userScore;
  cScore.innerHTML = computerScore;
}
 

//Win/Loss/Tie Label
const getLabel = () => {
  const action = document.getElementById("action");
  
  if (userChoice === computerChoice) {
    return (action.innerHTML = "<p>Its a Tie..</p>"); 
  }
    
  
  if (user === "win") {
    return action.innerHTML = "<p>You Win!</p>";
  }
  return action.innerHTML = "<p>Comp Wins!</p>";
}

function reset() {
  user = "";
  computer = "";
  userChoice = "";
  computerChoice = "";
  
}

