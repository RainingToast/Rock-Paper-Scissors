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
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?", );
    return humanChoice;
}