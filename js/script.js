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

let playerWin = 0;
let computerWin = 0;
let tieCount = 0;
let gameOver = 0;

function buttonPress(e) {
  let playerSelection;
  let computerSelection;
  let result;
  
  if (gameOver) return;

  playerSelection = normalizePlayerSelection(this.id);
  computerSelection = getComputerChoice();
  
  result = playRound(playerSelection, computerSelection);
 
  if (result == 0) {
    tieCount++;
    messageDiv.textContent = 'Tie!';
  } else if (result > 0) {
    playerWin++;
    messageDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerWin++;
    messageDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  
  showScore();
}

function showScore() {
  let score = `Wins: Player ${playerWin}, Computer ${computerWin}, Ties ${tieCount}`;

  if (playerWin >= 5 || computerWin >= 5) {
    if (playerWin > computerWin) {
      score += ' YOU WIN THE GAME!!';
    } else {
      score += ' COMPUTER WINS THE GAME!!';
    }
    
    gameOver = 1;
  }

  scoreDiv.textContent = score;
}

const body = document.querySelector('body');

const messageDiv = document.createElement('div');
messageDiv.textContent = 'Press button to play!';

const scoreDiv = document.createElement('div');
showScore();

body.appendChild(messageDiv);
body.appendChild(scoreDiv);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonPress));