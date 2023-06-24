const rps_options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return rps_options[Math.floor(Math.random() * 3)];
}

function normalizePlayerSelection(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return 0;
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
      return 1;
    } else {
      return -1;
    }
}

function game() {
  let playerSelection;
  let computerSelection;
  let result;
  let tieCount = 0;
  let playerWin = 0;
  let computerWin = 0;

  for (let round = 0; round < 5; round++) {
    do {
      playerSelection = normalizePlayerSelection(prompt("Rock, Paper, or Scissors?"));
    } while (!rps_options.includes(playerSelection));

    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);

    if (result == 0) {
      tieCount++;
      console.log('Tie!');
    } else if (result > 0) {
      playerWin++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
      computerWin++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
  }

  console.log(`You won ${playerWin} games, the computer won ${computerWin} games, and there were ${tieCount} ties`);
}

game();