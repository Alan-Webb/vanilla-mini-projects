/* BOARD */
const board = [];
const rows = 8;
const cols = 8;

/* MINES */
let minesCount = 5;
let minesLocation = [];

let tilesClicked = 0;
let flagEnabled = false;

let gameOver = false;

window.onload = function() {
  startGame();
}

function startGame() {
  document.getElementById("mines-count").innerText = minesCount;
}