let computer;
let playerPoints = 0;
let computerPoints = 0;

const score = document.querySelector('#score');
const displayPlayer = document.querySelector('#player');
const displayComp = document.querySelector('#computer');
const winnerRound = document.querySelector('#win');
const resetBtn = document.querySelector('#reset');
const buttons = document.querySelectorAll('.game_btn');

// --- event listener for game-play buttons 
buttons.forEach(btn => btn.addEventListener('click', () => {
    computer = computerPlay();
    playRound(btn.dataset.choice, computer); 
})); 

resetBtn.addEventListener('click',reset);

// ----- compiter choice = random 
function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor((Math.random()*10) % 3 );
    return choices[random];
}

function playRound(player, computer){
    displayPlayer.textContent = player;
    displayComp.textContent = computer;

    if(player == computer){
        winnerRound.textContent = "its a tie";
    }
    else if(player === "rock" && computer==="scissors" || player === "paper" && computer === "rock" || player==="scissors" && computer ==="paper"){
        winnerRound.textContent = `You win ${player} beats ${computer}`;
        playerPoints++;       
    }
    else {
        winnerRound.textContent = `You lose ${computer} beats ${player}`;
        computerPoints++; 
    }
    score.textContent = `${playerPoints} : ${computerPoints}`;
    // --- check if player or computer has reached 5 points
    winner();
}
function winner(){
    if(playerPoints == 5){
        winnerRound.textContent = "CONGRATULATION YOU WON!";
    }
    else if (computerPoints == 5){
        winnerRound.textContent =" ..you lost, better luck next time.";
    }
    else return;
    endGame();
}

function endGame(){
    buttons.forEach(btn => btn.disabled = true);
    resetBtn.textContent = "START OVER";
}
// --- reset all variables to restart game
function reset(){
    displayComp.textContent = "";
    displayPlayer.textContent = "";
    winnerRound.textContent = "start playing";
    score.textContent = "0 : 0";
    playerPoints = 0;
    computerPoints = 0;
    buttons.forEach(btn => btn.disabled = false);
    resetBtn.textContent = "RESET";
}
/* 
function playerPlay(){
    let correct = true;
    let choice;
    while(correct){
        choice = prompt("choose rock/paper/scissors").toUpperCase();
        if(choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS"){
            correct=false;
        }
    }
    return choice;
    
} 
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 1; i <= 5; i++){
        player = playerPlay();
        computer = computerPlay().toUpperCase();
        let result = playRound(player,computer);
        if(result == true){
            playerPoints++;
        }
        else computerPoints++;
        console.log(`result after ${i} rounds: (you)${playerPoints}:${computerPoints}(computer)`);
    }
    if(playerPoints > computerPoints) console.log("YOU WON!!");
    else if(computerPoints > playerPoints) console.log("you lost :/");
    else console.log("It's a tie");
}
*/
//game();