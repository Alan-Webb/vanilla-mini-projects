// JS representation from DOM
const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");

// Initial set up
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

// Format time
function formatTime(seconds) {
  
}