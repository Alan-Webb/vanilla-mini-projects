/* CREATE JS REPRESENTATION FROM DOM */
const startText = document.getElementById("startText");
console.log(startText);

/* GAME VARIABLES */
let gameRunning = false;

document.addEventListener("keydown", startGame);

/* START GAME*/
function startGame() {
	gameRunning = true;
	startText.style.display = "none";
}

startGame();
