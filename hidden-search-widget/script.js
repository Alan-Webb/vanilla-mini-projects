// JS representation from DOM
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Event listerners
btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});
