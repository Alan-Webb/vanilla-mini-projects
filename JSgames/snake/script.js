/* BOARD */
const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context; 

/* SNAKE */
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    
    update();
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}


