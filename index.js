let humanScore = 0;
let computerScore = 0;
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
let text = document.getElementById("choice-pick-items");
let scoreGame = document.getElementById("scoreGame");
let personImage = document.getElementById("person")
let computerImage = document.getElementById("computer")

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); // return 0 1 2
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  }
  return "scissors";
}

function playRound(humanChoices, computerChoices) {
  let humanChoice = humanChoices.toLowerCase();
  let computerChoice = computerChoices.toLowerCase();

  if (humanChoice == computerChoice) {
    text.innerHTML = "TIE!!";
    return;
  }

  if (humanChoice == "rock" && computerChoice == "scissors") {
    text.innerHTML = "You Win! Rock beats Scissors";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    text.innerHTML = "You Win! Paper beats Rock";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    text.innerHTML = "You Win! Scissors beats Paper!";
  } else {
    text.innerHTML = "You Lose! " + computerChoice + " beats " + humanChoice;
    computerScore += 1;
    scoreGame.innerHTML = humanScore + ":" + computerScore;
    if (computerScore == 5) {
      alert("Game Over, You Lose!!");
      location.reload();
    }
    return;
  }
  humanScore += 1;
  if (humanScore == 5) {
    alert("Game Over, You Win!!");
    location.reload();
  }
  scoreGame.innerHTML = humanScore + ":" + computerScore;
}

function displayChoice(pickedChoice, pickedComputerChoice) {
  personImage.innerHTML = ""
  computerImage.innerHTML = ""
  const img = document.createElement("img")
  const img2 = document.createElement("img")
  img.src = pickedChoice + ".png"
  img.width = 150;
  img.height = 150;
  img2.width = 150;
  img2.height = 150;
  img2.src = pickedComputerChoice + ".png"
  console.log(img2)
  personImage.appendChild(img)
  computerImage.append(img2)
}

function handleClickRock() {
  computerPicked = getComputerChoice()
  displayChoice("rock", computerPicked)
  playRound("rock", computerPicked);
}
function handleClickPaper() {
  computerPicked = getComputerChoice()
  displayChoice("paper", computerPicked)
  playRound("paper", computerPicked);
}
function handleClickScissors() {
  computerPicked = getComputerChoice()
  displayChoice("scissors", computerPicked)
  playRound("scissors",computerPicked);
}

rockChoice.addEventListener("click", handleClickRock);
paperChoice.addEventListener("click", handleClickPaper);
scissorsChoice.addEventListener("click", handleClickScissors);
