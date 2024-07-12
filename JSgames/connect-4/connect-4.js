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
      tile.addEventListener("click", setPiece);
      document.getElementById("board").append(tile);
    }
  }
}

function setPiece() {
  if (gameOver) {
    return;
  }
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  board[r][c] = currentPlayer;
  let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }
}