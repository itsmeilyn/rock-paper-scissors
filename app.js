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
let total_games = 0;

function playRound(humanChoice, computerChoice) {
  if(total_games !== 5) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      total_games++;

      console.log(`You win! you:${humanChoice} beats com:${computerChoice}`);
    } else if (humanChoice === computerChoice) {
      total_games++;
      console.log(`"Tie! you:${humanChoice}, com:${computerChoice}`);
    } else {
      computerScore++;
      total_games++
      console.log(`You lose! com:${computerChoice} beats you:${humanChoice}`);
    }
  }

}

// console.log(`Game over! human:${humanScore} computer:${computerScore}`);

// DOM
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
