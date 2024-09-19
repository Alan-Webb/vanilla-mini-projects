// JS representation from DOM (1)
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Event listeners (2)
form.addEventListener("submit", (e) => {
	e.preventDefault();

	addTodo();
});

// Adds todo to list (3)
function addTodo(todo) {
	let todoText = input.value;

	if (todo) {
		todoText = todo.text;
	}
	// console.log(todoText);
	// construct list item (4)
	if (todoText) {
		const todoEL = document.createElement("li");
		if (todo && todo.completed) {
			todoEL.classList.add("completed");
		}
		todoEL.innerText = todoText;

		todoEL.addEventListener("click", () =>
			todoEL.classList.toggle("completed")
		);

		todoEL.addEventListener("contextmenu", (e) => {
			e.preventDefault();

			todoEL.remove();
		});

		todosUL.appendChild(todoEL);

		input.value = "";
	}
}
