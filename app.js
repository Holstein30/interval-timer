// App - Using Modular Design

// * Ground Rules
// Self contained module
// - everything to do with my module is in my module
// - no global variables
// - if a module manages more than one thing it should be split up
// Separation of concerns
// DRY code
// efficient DOM usage
// - very few $(selections)
// no memory leaks
// - all events can be unbound

let countdown;
const timerDisplay = document.querySelector(".time-left");
const executeButton = document.querySelector(".execute");

function timer(seconds, intervals, rounds) {
  // clear any exisiting timers
  clearInterval(countdown);
  let intervalCount = intervals;
  let roundCount = rounds;
  let intervalSeconds = seconds;

  countdown = setInterval(() => {
    if (intervalSeconds < 0) {
      intervalSeconds = seconds;
    }
    displayTimeLeft(intervalSeconds);
    intervalSeconds--;
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = document.querySelector(".seconds-select").value;
  const intervalCount = document.querySelector(".interval-select").value;
  const roundsCount = document.querySelector(".rounds-select").value;
  timer(seconds, intervalCount, roundsCount);
}

executeButton.addEventListener("click", startTimer);

// if (secondsLeft < 0 && intervalCount === 0 && roundCount === 0) {
//   clearInterval(countdown);
//   return;
// } else if (secondsLeft < 0 && intervalCount != 0) {
//   intervalCount--;
// } else if (secondsLeft < 0 && intervalCount === 0 && roundCount != 0) {
//   roundCount--;
// }
