let timerDisplay = document.getElementById("display");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let timer;
let count = 0;

function startTimer() {
  timer = setInterval(() => {
    count++;
    timerDisplay.innerText = count;
  }, 1000);

  startButton.textContent = "Pause";
}

function stopTimer() {
  clearInterval(timer);
  timerDisplay.innerText = 0;
  count = 0;
  startButton.textContent = "Start";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
