/* CREATE JS REPRESENTATION FROM DOM */
const startText = document.getElementById("startText");

/* GAME VARIABLES */
let gameRunning = false;

document.addEventListener("keydown", startGame);

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

function updatePaddle1() {
	console.log("paddle1");
}
