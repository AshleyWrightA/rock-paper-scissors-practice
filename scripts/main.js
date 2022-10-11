"use strict";

const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

const playerDisplayedScore = document.getElementById("playerDisplayedScore");
const computerDisplayedScore = document.getElementById("computerDisplayedScore");

const choiceRock = document.getElementById("rockButton")
const choicePaper = document.getElementById("paperButton")
const choiceScissors = document.getElementById("scissorsButton")

const activePlayerChoice = document.getElementById("activePlayerChoice");
const gameState = document.getElementById("gameState");
const activeComputerChoice = document.getElementById("activeComputerChoice");

console.log(activeComputerChoice.textContent)

let playerSelection = "";
let computerSelection = ""; 

let playerScore = 0
let computerScore = 0

document.addEventListener("click", (e) => {
    if (e.target === choiceRock) {
        playerSelection = rock
    }
    else if (e.target === choicePaper) {
        playerSelection = paper
    }
    else if (e.target === choiceScissors) {
        playerSelection = scissors
    }
    gameDirector(playerSelection, getComputerChoice());
}, false);

function getComputerChoice() {
    let choiceList = [rock, paper, scissors];
    let index = Math.floor(Math.random() * choiceList.length);
    computerSelection =  choiceList[index]
    return computerSelection;
}

const gameDirector = (playerSelection, computerSelection) =>  {

    if (playerSelection == computerSelection) {
        //Draw
        updateSelections();
        gameState.textContent = "Draw"
        activePlayerChoice = playerSelection;
    }
    else if ( (playerSelection == rock && computerSelection == paper)
    || (playerSelection == paper && computerSelection == scissors) 
    || (playerSelection == scissors && computerSelection == rock)) {
        //Computer Wins
        updateSelections();
        gameState.textContent = "Computer Wins."
        computerScore += 1;
        computerDisplayedScore.textContent = computerScore;

    }
    else if ( (playerSelection == rock && computerSelection == scissors)
    || (playerSelection == paper && computerSelection == rock)
    || (playerSelection == scissors && computerSelection == paper)) {
        //Player Wins
        updateSelections();
        gameState.textContent = "You Win."
        playerScore += 1;
        playerDisplayedScore.textContent = playerScore;
    }
}

const updateSelections = () => {
    activePlayerChoice.textContent = playerSelection;
    activeComputerChoice.textContent = computerSelection;
}