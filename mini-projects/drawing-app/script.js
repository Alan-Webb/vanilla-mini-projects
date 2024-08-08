// JS representation from DOM
const canvas = document.getElementById("canvas");

// Context for canvas
const ctx = canvas.getContext("2d");

// Global vars
let size = 20;
let color = "black";
let x;
let y;

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
