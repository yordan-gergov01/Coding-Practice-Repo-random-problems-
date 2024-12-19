let timerDisplay = document.getElementById("display");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let count = 0;

function startTimer() {
  setInterval(() => {
    count++;
    timerDisplay.innerText = count;
  }, 1000);

  startButton.textContent = "Pause";
}

startButton.addEventListener("click", startTimer);
