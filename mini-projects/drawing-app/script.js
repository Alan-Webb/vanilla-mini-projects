// JS representation from DOM
const canvas = document.getElementById("canvas");

// Context for canvas
const ctx = canvas.getContext("2d");

// Global vars
let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

// Event listeners
canvas.addEventListener("mousedown", (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
	console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;
	console.log(isPressed, x, y);
});

// Generates starting point for brush position
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

// Maps brush position
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}
