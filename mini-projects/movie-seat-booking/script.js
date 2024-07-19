/* JS REPRESENTATION FROM DOM */
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getAnimations("movie");

const ticketPrice = +movieSelect.value; // shorthand for parseInt

container.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("seat") &&
		!e.target.classList.contains("occupied")
	) {
		e.target.classList.toggle("selected");
	}
});
