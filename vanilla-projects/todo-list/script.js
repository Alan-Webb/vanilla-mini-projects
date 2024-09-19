// JS representation from DOM (1)
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Event listeners (2)
form.addEventListener("submit", (e) => {
	e.preventDefault();

	addTodd();
});

// Adds todo to list (3)
function addTodo(todo) {
	let todoText = input.value;

	if (todo) {
		todoText = todo.text;
	}
}
