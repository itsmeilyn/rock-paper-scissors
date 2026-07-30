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
  return prompt("Enter your choice: ");
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
