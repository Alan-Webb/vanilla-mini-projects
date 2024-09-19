// JS representation from DOM
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Event listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	addTodd();
});
