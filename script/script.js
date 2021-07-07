let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random() * 10);
}
  
function compareGuesses(humanGuess, computerGuess, target){
     var diffTargetHuman = Math.abs(target - humanGuess);
     var diffTargetComputer = Math.abs(target - computerGuess);
     if(diffTargetHuman < diffTargetComputer){
       return true;
     }
     else if(diffTargetHuman > diffTargetComputer){
       return false;
     }
     return true;
}
function updateScore(winner){
     if(winner === 'human'){
       humanScore+=1;
     }
     else if(winner === 'computer'){
       computerScore+=1;
     }
}
function advanceRound(){
     currentRoundNumber++;
}