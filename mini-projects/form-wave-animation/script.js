// JS representaion from DOM
const labels = document.querySelectorAll(".form-control label");

// Changes each label into array and each letter into a span
labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map((letter, idx) => `<span>${letter}</span>`)
		.join("");
});
