// JS representaion from DOM
const range = document.getElementById("range");

// Event listener
range.addEventListener("input", (e) => {
	const value = +e.target.value;
});
