// JS representation from DOM
const addBtn = document.getElementById("add");

// Event listeners
addBtn.addEventListener("click", () => addNewNote());

// Generates HTML for note
function addNewNote(text = "") {
	const note = document.createElement("div");
	note.classList.add("note");

	note.innerHTML = `<div class="tools">
				<button class="edit">
					<i class="fas fa-edit"></i>
				</button>
				<button class="delete">
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>
			<div class="main hidden"></div>
			<textarea></textarea>`;
}
