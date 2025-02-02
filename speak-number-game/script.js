const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("Number:", randomNum);

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
	const msg = e.results[0][0].transcript;

	writeMessage(msg);
	checkNumber(msg);
}

// Write what user speaks
function writeMessage(msg) {
	msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

// Check msg against number
function checkNumber(msg) {
  const num = +msg;
