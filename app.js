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
// const timerDisplay = document.querySelector(".display__time-left");
// const endTime = document.querySelector(".display__end-time");
// const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  // clear any exisiting timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  //   displayTimeLeft(seconds);
  //   displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
  }, 1000);
}
