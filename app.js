// DOM
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#btnReset");
const playerDisplayScore = document.querySelector("#playerScore");
const comDisplayScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");
const roundDisplay = document.querySelector("#round");

function getComputerChoice() {
  const comChoice = Math.floor(Math.random() * 3); // generate random number 0-2
  switch (comChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("invalid");
  }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
const MAX_ROUNDS = 5;
let isGameOver = false;

function playRound(humanChoice, computerChoice) {
  if (isGameOver) return;
  if (round !== MAX_ROUNDS) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      round++;
      updateScoreboard();
      result.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
      round++;
      updateScoreboard();
      result.textContent = "Tie!";
    } else {
      computerScore++;
      round++;
      updateScoreboard();
      result.textContent = `Computer won this round! ${computerChoice} beats ${humanChoice}`;
    }
  }
  if (round === MAX_ROUNDS) {
    isGameOver = true;
    gameOver();
  }
}

function updateScoreboard() {
  roundDisplay.textContent = round;
  playerDisplayScore.textContent = humanScore;
  comDisplayScore.textContent = computerScore;
}

function gameOver() {
  if (humanScore > computerScore) {
    result.textContent = "GAME OVER. YOU WON!";
  } else if (computerScore > humanScore) {
    result.textContent = "GAME OVER. COM WON!";
  } else {
    result.textContent = "GAME OVER. TIE!";
  }
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function resetGame() {
  round = 0;
  humanScore = 0;
  computerScore = 0;
  isGameOver = false;
  playerDisplayScore.textContent = "0";
  result.textContent = "-";
  comDisplayScore.textContent = "";
  roundDisplay.textContent = "0";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

// console.log(`Game over! human:${humanScore} computer:${computerScore}`);

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

reset.addEventListener("click", () => {
  resetGame();
});
