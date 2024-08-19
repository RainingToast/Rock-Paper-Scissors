function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        console.log("rock")
        } else if (randomNum === 2) {
        console.log("paper") }
        else {
        console.log ("scissors")
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?", "" )
    return console.log(choice);
}

let humanScore = 0 ;
let computerScore = 0 ; 

function playRound(humanChoice, computerChoice) {
    let result = "";
   if (humanChoice == computerChoice) {
    result = "it's a draw";
   } else {
    switch (humanChoice) {
        case "rock":
            result =  (computerChoice == "scissors") ? "You Win" : "You Lose";
           break;
        case "paper":
            result =     (computerChoice == "rock") ? "You Win" : "You Lose";
            break;
        case "scissors":
            result =    (computerChoice == "paper") ? "You Win" : "You Lose";
            break;       
    }
    
console.log(result);
   }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

