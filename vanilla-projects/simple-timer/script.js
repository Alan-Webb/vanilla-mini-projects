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

const timerInterval = setInterval(runTimer, 1000);

// Event listeners
playBtn.addEventListener("click", () => {
	playing = !playing;
	playBtn.classList.toggle("play");
	playBtn.classList.toggle("bg-green-500");

	const playIcon = playBtn.querySelector("i");
	playIcon.classList.toggle("fa-play");
	playIcon.classList.toggle("fa-pause");
});

// Run timer
function runTimer() {
	if (playing) {
		currentSeconds -= 1;
		if (currentSeconds <= 0) {
			clearInterval(timerInterval);
		}
		timerEl.innerText = formatTime(currentSeconds);
		root.style.setProperty("--degrees", calcDeg());
	}
}

// Format time
function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const newSeconds = seconds % 60;

	return `${minutes.toString().padStart(2, "0")}:${newSeconds
		.toString()
		.padStart(2, "0")}`;
}
