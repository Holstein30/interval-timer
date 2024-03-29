let countdown;
const timerDisplay = document.querySelector(".time-left");
const executeButton = document.querySelector(".execute");
const roundDisplay = document.querySelector(".round-count");
const intervalDisplay = document.querySelector(".interval-count");

function timer(seconds, intervals, rounds) {
  // clear any exisiting timers
  clearInterval(countdown);
  let intervalCount = parseInt(intervals);
  let roundCount = parseInt(rounds);
  let intervalSeconds = parseInt(seconds);

  countdown = setInterval(() => {
    if (intervalSeconds === 0 && intervalCount === 1 && roundCount === 1) {
      displayTimeLeft(intervalSeconds);
      displayRoundsLeft(0);
      displayIntervalsLeft(0);
      clearInterval(countdown);
      return;
    }
    if (intervalSeconds < 0 && intervalCount != 1) {
      intervalCount--;
      intervalSeconds = parseInt(seconds);
    } else if (intervalSeconds < 0 && intervalCount === 1 && roundCount != 1) {
      roundCount--;
      intervalSeconds = parseInt(seconds);
      intervalCount = parseInt(intervals);
    }

    console.log({ intervalSeconds, intervalCount, roundCount });
    displayRoundsLeft(roundCount);
    displayIntervalsLeft(intervalCount);
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

// Display Rounds Left

function displayRoundsLeft(currentRound) {
  const display = `Rounds Left: ${currentRound}`;
  roundDisplay.textContent = display;
}

// Display Intervals Left

function displayIntervalsLeft(currentInterval) {
  const display = `Intervals Left: ${currentInterval}`;
  intervalDisplay.textContent = display;
}

executeButton.addEventListener("click", startTimer);

// App - Converting to Modular Design

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
