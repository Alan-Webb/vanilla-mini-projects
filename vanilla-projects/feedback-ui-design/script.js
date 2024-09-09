// JS representaion from DOM
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

selectedRating = "Satisfied";

// Event listeners
panel.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		removeActive();
		e.target.parentNode.classList.add("active");
		selectedRating = e.target.nextElementSibling.innerHTML;
		console.log(selectedRating);
	}
});



function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active");
	}
}
