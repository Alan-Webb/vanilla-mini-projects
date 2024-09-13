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
	const minutes = Math.floor(seconds / 60);
	const newSeconds = seconds % 60;

	return `${minutes.toString().padStart(2, "0")}:${newSeconds
		.toString()
		.padStart(2, "0")}`;
}
