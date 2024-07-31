// JS representation from DOM
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

// event listeners
smallCups.forEach((cup, idx) => {
	cup.addEventListener("click", () => {
		highlightCups(idx);
	});
});

// fill, empty and toggle small cups
function highlightCups(idx) {
	if (
		smallCups[idx].classList.contains("full") &&
		!smallCups[idx].nextElementSibling.classList.contains("full")
	) {
		idx--;
	}
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});
	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll(".cup-small.full").length;
	console.log(fullCups);
}
