// define veriables
let computer;
let playerPoints = 0;
let computerPoints = 0;
// get DOM variables
const score = document.querySelector('#score');
const winnerRound = document.querySelector('#score-descr');
const resetBtn = document.querySelector('#reset');
const buttons = document.querySelectorAll('.game_btn');

// --- event listener for buttons 
buttons.forEach(btn => btn.addEventListener('click', () => {
    computer = computerPlay();
    playRound(btn.dataset.choice, computer); 
})); 
resetBtn.addEventListener('click',reset);

// ----- generate computer choice
function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor((Math.random()*10) % 3 );
    return choices[random];
}

// find winner of the round
function playRound(player, computer){
    if(player == computer){
        winnerRound.innerHTML = `Its a tie. ${player}${"user".fontsize(3).sub()} equals ${computer}${"comp".fontsize(3).sub()}`;
    }
    else if(player === "rock" && computer==="scissors" || player === "paper" && computer === "rock" || player==="scissors" && computer ==="paper"){
        winnerRound.innerHTML = `<em>You win! ${player}${"user".fontsize(3).sub()} beats ${computer}${"comp".fontsize(3).sub()}</em>`;
        playerPoints++;       
    }
    else {
        winnerRound.innerHTML = `<em>You lose.. ${computer}${"comp".fontsize(3).sub()} beats ${player}${"user".fontsize(3).sub()}</em>`;
        computerPoints++; 
    }
    score.textContent = `${playerPoints} : ${computerPoints}`;
    // --- check if player or computer has reached 5 points
    winner();
}
function winner(){
    if(playerPoints == 5){
        winnerRound.id = 'win';
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
    winnerRound.id = "score-descr";
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