const playerRed = "R";
const playerYellow = "Y";
let currentPlayer = playerRed;

let gameOver = false;

let board;
const rows = 6;
const columns = 7;

window.onload = function() {
  setGame();
}

function setGame() {
  board =[];
  for (let r = 0; r < rows; r++) {
    let rows = [];
    for (let c = 0; c < columns; c++) {
      rows.push("");
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}