// JS representaion from DOM
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

// Event listeners
panel.addEventListener("click", (e) => {
	if (e.target.classList.contains("rating")) {
		console.log(e.target);
	}
});
