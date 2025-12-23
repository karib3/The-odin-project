let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let humanChoice = prompt("Enter either Rock, Paper or Scissors");
    console.log("You chose", humanChoice)
    return humanChoice;
}

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice == 0){
        console.log("Computer chose Rock")
        return "Rock"
    }
    else if(computerChoice == 1){
        console.log("Computer chose Paper")
        return "Paper"
    }
    else if(computerChoice == 2){
        console.log("Computer chose Scissors")
        return "Scissors"
    }
    else{
        console.log("Error: unknown value")
    }
    return computerChoice;
}

function playRound(){
    let x = getHumanChoice();
    let y = getComputerChoice();
    if(x === y){
        console.log("Draw");
    }
    else if(x === "Scissors" && y === "Paper"){
        console.log("You win")
        humanScore++;
    }
    else if(x === "Paper" && y === "Rock"){
        console.log("You win")
        humanScore++;
    }
    else if(x === "Rock" && y === "Scissors"){
        console.log("You win")
        humanScore++;
    }
    else{
        console.log("Computer wins")
        computerScore++;
    }
}

function round(){
    for(let i=1; i<=5; i++){
        console.log("Round ", i)
        playRound();
    }
    console.log("Your total score is ", humanScore)
    console.log("Computer's total score is ", computerScore)
    if(humanScore > computerScore){
        console.log("You are the winner!!!!!")
    }
    else if(humanScore < computerScore){
        console.log("You lost against a computer lol.")
    }
    else if(humanScore === computerScore){
        console.log("Its a draw.")
    }
    else{
        console.log("Error.")
    }
}

round();