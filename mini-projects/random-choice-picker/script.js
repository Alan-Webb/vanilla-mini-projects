// JS representaion from DOM
const tagesEl = document.getElementById("tags");
const textarea = document.getElementById("textArea");

textarea.focus();

// Event listeners
textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());
	console.log(tags);
}
