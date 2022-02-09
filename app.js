// Filza Ahmed Siddiqui 06/08/2021

//listen for dropdown selection
//grab value of form and put into variable called final score
// use this later to set max score for player1/2 score ( if else statements)

//listen for click of p1/p2 button
//set variable p1/p2 to equal 0
//when clicked make a function +1 to p1/p2 variable score

//use the previous variable to update innerhtml

//when either payer reaches (if else statement) form selcted number >>> change winners score display color to green

let maxScore = 3;

// scores displayed
const p1ScoreDisplay = document.querySelector("#p1score");
const p2ScoreDisplay = document.querySelector("#p2score");

//players buttons
const p1button = document.querySelector("#p1");
const p2button = document.querySelector("#p2");

//reset button
const reset = document.querySelector("#reset");

//dropdown number selected
let maxScoreDisplay = document.querySelector("#maxScore");

//message
let msg = document.querySelector("#msg");

//maxscore update
maxScoreDisplay.addEventListener("change", function () {
  console.log(`Max score will be ${this.value}`);
  let x = this.value;
  maxScore = x;
});

//buttons clicked
let p1NewScore = 0;
let p2NewScore = 0;

p1button.addEventListener("click", function () {
  p1NewScore++;
  console.log(p1NewScore);
  p1ScoreDisplay.innerHTML = p1NewScore;

  if (p1NewScore == maxScore) {
    console.log("player 1 wins!!!!!!");
    p1ScoreDisplay.style.color = "green";
    p2ScoreDisplay.style.color = "red";
    gameOver("One");
  }
});

p2button.addEventListener("click", function () {
  p2NewScore++;
  console.log(p2NewScore);
  p2ScoreDisplay.innerHTML = p2NewScore;

  if (p2NewScore == maxScore) {
    console.log("player 2 wins!!!!!!");
    p2ScoreDisplay.style.color = "green";
    p1ScoreDisplay.style.color = "red";
    gameOver("Two");
  }
});

// function reset(){

// }

function gameOver(playerNum) {
  msg.innerHTML = `Player ${playerNum} Wins!`;
  msg.className += " animate__wobble";
  p1button.disabled = true;
  p2button.disabled = true;
}

reset.addEventListener("click", function () {
  window.location.reload(false);
});
