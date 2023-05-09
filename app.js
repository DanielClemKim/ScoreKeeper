const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2.textContent = p2Score;
  }
});
