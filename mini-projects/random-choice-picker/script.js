// JS representaion from DOM
const tagesEl = document.getElementById("tags");
const textarea = document.getElementById("textArea");

textarea.focus();

// Event listeners
textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);
	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);
		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());
	tagesEl.innerHTML = "";
	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagesEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
	}, 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll(".tag");
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add("highlight");
}

function unHighlightTag(tag) {
	tag.classList.remove("highlight");
}
