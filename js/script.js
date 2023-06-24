const rps_options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return rps_options[Math.floor(Math.random() * 3)];
}

function normalizePlayerSelection(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    nps = normalizePlayerSelection(playerSelection);

    if (nps == computerSelection) {
      return "Tie!"
    } else if ((nps == "Rock" && computerSelection == "Scissors") ||
        (nps == "Paper" && computerSelection == "Rock") ||
        (nps == "Scissors" && computerSelection == "Paper")) {
      return `You win! ${nps} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${nps}`;
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));