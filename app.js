function getComputerChoice() {
  const comChoice = Math.floor(Math.random() * 3); // generate random number 0-2
  switch (comChoice) {
    case 0:
      console.log("rock");
      break;
    case 1:
      console.log("paper");
      break;
    case 2:
      console.log("scissors");
      break;
    default:
      console.log("invalid");
  }
}
