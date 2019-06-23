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
// const endTime = document.querySelector(".display__end-time");

function timer(seconds) {
  // clear any exisiting timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
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
function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  console.log({ hour, minutes });
  // endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}: ${
  //     minutes < 10 ? "0" : ""
  //     }${minutes}`;
}

function startTimer() {
  const seconds = document.querySelector(".seconds-select").value;
  const intervalCount = document.querySelector(".interval-select").value;
  const roundsCount = document.querySelector(".rounds-select").value;
  console.log({ intervalCount, roundsCount });
  timer(seconds);
}

executeButton.addEventListener("click", startTimer);
// document.customForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const mins = this.minutes.value;
//     timer(mins * 60);
//     this.reset();
// });
