function getComputerChoice() {
    let compChoice;
    let randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0: compChoice = "Rock";
            break;
            case 1: compChoice =  "Paper";
            break;
            case 2: compChoice = "Scissors";
            break;
    }
    return compChoice.toLowerCase();
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore =  0;
let computerScore =  0;
let result;


function playRound () {
   const humanChoice = getHumanChoice();
   const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        result === "Tie";
    } else {
        switch (humanChoice) {
            case "rock" :
               result = (computerChoice === "scissors") ? "You win": "You lose";
               break;
               case "paper" :
                result = (computerChoice === "rock") ? "You win": "You lose";
                break;
                case "scissors" :
                result = (computerChoice === "paper") ? "You win": "You lose";
                break;   
        }

        }
      console.log(result);
        
            
}

function scoreIncrease() {
    if (result === "You win") {
        humanScore +=1; console.log(humanScore, "Human Score,", computerScore, "Computer Score");
    } else if (result === "Tie") {
        console.log(humanScore, "Human Score," , computerScore, "Computer Score");
    } else {
        computerScore +=1; console.log(humanScore, "Human Score,", computerScore, "Computer Score");
    }
        
}

function playGame() {
    playRound(), scoreIncrease();
}

playGame()
