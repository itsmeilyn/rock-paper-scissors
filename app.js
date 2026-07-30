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

function getHumanChoice() {
  const result = prompt("Enter your choice: ").toLowerCase();
  // console.log(typeof result);
  return result;
}

function playGame(time) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < time; i++) {
    function playRound(humanChoice, computerChoice) {
      if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        console.log(`You win! you:${humanChoice} beats com:${computerChoice}`);
      } else if (humanChoice === computerChoice) {
        console.log(`"Tie! you:${humanChoice}, com:${computerChoice}`);
      } else {
        computerScore++;
        console.log(`You lose! com:${computerChoice} beats you:${humanChoice}`);
      }
    }
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Game over! human:${humanScore} computer:${computerScore}`);
}

playGame(5);
