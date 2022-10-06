"use strict";

let playerScore = 0;
let computerScore = 0;

let playerChoice = ""
let compChoice = ""

const choiceRock = document.getElementById("rockButton")
const choicePaper = document.getElementById("paperButton")
const choiceScissors = document.getElementById("scissorsButton")

document.addEventListener("mouseover", (e) => {
    if (e.target === choiceRock || e.target === choicePaper || e.target === choiceScissors) {
        e.target.style.scale = (1.1,1.1);
    }
}, false);

document.addEventListener("mouseout", (e) => {
    if (e.target === choiceRock || e.target === choicePaper || e.target === choiceScissors) {
        e.target.style.scale = (1,1);
    }
}, false);

document.addEventListener("onclick", (e) => {
    if (e.target === choiceRock) {
        playerChoice = ""
    }
}, false);

function playerSelection(choice) {
    gameDirector(choice, computerSelection);
}

function computerSelection() {
    let computerChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[index];
}

let gameDirector = (playerChoice, computerChoice) =>  {

    if (!validatePlayerSelection(playerChoice)) {
        return
    }

    if (playerChoice == computerChoice) {
        console.log("You chose " + playerChoice + " and the computer chose " + computerChoice + ".")
        console.log("Its a draw!")
    }
    else if ( (playerChoice == "rock" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "scissors") 
    || (playerChoice == "scissors" && computerChoice == "rock")) {
        console.log("You chose " + playerChoice + " and the computer chose " + computerChoice + ".")
        console.log("You Lose.")
        computerScore += 1;
        console.log("The computers score is " + computerScore + ". Your score is " + playerScore + ".")
    }
    else if ( (playerChoice == "rock" && computerChoice == "scissors")
    || (playerChoice == "paper" && computerChoice == "rock")
    || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log("You chose " + playerChoice + ". and the computer chose " + computerChoice + ".")
        console.log("You Win!")
        playerScore += 1;
        console.log("Your score is " + playerScore + ". The computers score is " + computerScore + ".")

    }
    else if (playerChoice == "quit") {
        playGame = False;
    }
}