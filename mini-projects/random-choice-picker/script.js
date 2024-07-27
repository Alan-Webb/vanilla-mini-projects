// JS representaion from DOM
const tagesEl = document.getElementById("tags");
const textarea = document.getElementById("textArea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);
});
