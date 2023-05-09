// variables for each objects
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#reset");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const scoreSelector = document.querySelector("#playto");

// initial values
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// event activated when you click player 1 button
p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1.textContent = `WINNER ${p1Score}`;
      p2.textContent = `${p2Score} LOSER`;
      p1.classList.add("has-text-success");
      p2.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    } else {
      p1.textContent = p1Score;
    }
  }
});

// event activated when you click player 2 button
p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1.textContent = `LOSER ${p1Score}`;
      p2.textContent = `${p2Score} WINNER`;
      p2.classList.add("has-text-success");
      p1.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    } else {
      p2.textContent = p2Score;
    }
  }
});

// event activated when you change winning score
scoreSelector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

// event activated when you click reset button
resetBtn.addEventListener("click", reset);

// function resets game score
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1.textContent = p1Score;
  p2.textContent = p2Score;
  p1.classList.remove("has-text-success", "has-text-danger");
  p2.classList.remove("has-text-success", "has-text-danger");
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}
