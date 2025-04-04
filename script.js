const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopwatchDisplay = document.getElementById("stopwatchDisplay"); // Corrected this line

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let isRunning = false;
let isPaused = false;

startBtn.addEventListener("click", function () {
  if (!isRunning) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
    isPaused = false;
  }
});

pauseBtn.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    isPaused = true;
  } else if (isPaused) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
    isPaused = false;
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatchDisplay.textContent = "00:00:00";
  isRunning = false;
  isPaused = false;
});

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  stopwatchDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
