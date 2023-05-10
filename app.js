// player 1
const p1 = {
  score: 0,
  position: "left",
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1"),
};

// player 2
const p2 = {
  score: 0,
  position: "right",
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2"),
};

// reset button & score select objects
const resetBtn = document.querySelector("#reset");
const scoreSelector = document.querySelector("#playto");

// initial values
let winningScore = 3;
let isGameOver = false;

// event activated when you click player 1 button
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

// event activated when you click player 2 button
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

// event activated when you change winning score
scoreSelector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

// event activated when you click reset button
resetBtn.addEventListener("click", reset);

// --- functions ---
// function updates scores
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      if (player.position === "left") {
        player.display.innerHTML = `<span class="flex">WINNER</span> ${player.score}`;
        opponent.display.innerHTML = `${opponent.score} <span class="flex">LOSER</span>`;
      } else {
        opponent.display.innerHTML = `<span class="flex">LOSER</span> ${opponent.score}`;
        player.display.innerHTML = `${player.score} <span class="flex">WINNER</span>`;
      }
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    } else {
      player.display.textContent = player.score;
    }
  }
}

// function resets game scores
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

var lastTouchEnd = 0;
document.documentElement.addEventListener(
  "touchend",
  function (event) {
    var now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);
