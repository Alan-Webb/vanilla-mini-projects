/* JS REPRESENTATION FROM DOM */
const startText = document.getElementById("startText");

/* GAME VARIABLES */
let gameRunning = false;
let keysPressed = {};

document.addEventListener("keydown", startGame);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

/* START GAME*/
function startGame() {
	gameRunning = true;
	startText.style.display = "none";
	document.removeEventListener("keydown", startGame);
	gameLoop();
}

function gameLoop() {
	if (gameRunning) {
		updatePaddle1();
		setTimeout(gameLoop, 8);
	}
}

function handleKeyDown(e) {
	keysPressed[e.key] = true;
}

function handleKeyUp(e) {
	keysPressed[e.key] = false;
}

function updatePaddle1() {
	console.log(keysPressed);
}
