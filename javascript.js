

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

    

getComputerChoice();

