function computerPlay(){
    // randomly returns rock, paper or scissors
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor((Math.random()*10)/3 );
    return choices[random];
}
function playRound(player, computer){
    if(player == computer){
        console.log("its a tie choose again");
        player = playerPlay();
        computer = computerPlay();
        playRound(player,computer);
    }
    else if(player === "ROCK" && computer==="SCISSORS" || player === "PAPER" && computer === "ROCK" || player==="SCISSORS" && computer ==="PAPER"){
        console.log(`You win ${player} beats ${computer}`);
        return true;
    }
    else {
        console.log(`You lose ${computer} beats ${player}`);
        return false;
    }
}
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
let player;
let computer;
game();