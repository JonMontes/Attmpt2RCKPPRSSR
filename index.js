//Computer will randomly choose from options Rock Paper or Scissors
function computerPlay() {
    let rpsArray = ["Rock", "Paper", "Scissors"];
    let computerchoice = rpsArray[Math.floor(Math.random()*rpsArray.length)];
    return computerchoice
}

const computerSelection = computerPlay();

//player is givin a prompt returning either rock papers or scissors

let pSelection = prompt('Rock, Paper or Scissors?');
(pSelection.toLowerCase());

console.log(computerSelection, pSelection);



//
function playRound() {

}

for (let i = 0; i < 5; i++) {
    
 }