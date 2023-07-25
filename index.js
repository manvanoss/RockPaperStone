const choices = ["rock", "paper", "scissors"];
let playerWinAmount = 0;
let computerWinAmount = 0;
let tieAmount = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];

}

function updateScores(){
    document.getElementById("player-score").textContent = playerWinAmount;
    document.getElementById("computer-score").textContent = computerWinAmount;
    document.getElementById("result-tie").textContent = tieAmount;
}

function checkWinner(playerSelections, computerSelections){
    if(playerSelections === computerSelections){
        tieAmount++
    }
    else if ( 
        (playerSelections === "rock" && computerSelections === "scissors") ||
        (playerSelections === "paper" && computerSelections === "rock") ||
        (playerSelections === "scissors" && computerSelections === "paper")
         ){
            playerWinAmount++;
         }
    else{
        computerWinAmount++;
    }
    updateScores();

    if (computerWinAmount=== 5){
        alert("You Lost!");
        reset();
    }
    else if (playerWinAmount === 5){
        alert("You Win!");
        reset();
    }
}

function reset(){
    playerWinAmount = 0;
    computerWinAmount = 0;
    tieAmount = 0;
    updateScores();
}

function playGame(playerSelections) {
    const computerSelections = computerPlay();
    checkWinner(playerSelections, computerSelections);
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));


