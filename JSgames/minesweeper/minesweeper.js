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
  // populate board
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);
}