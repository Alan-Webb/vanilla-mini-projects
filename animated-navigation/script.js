// JS representaion from DOM
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

// Event listeners
toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
});
