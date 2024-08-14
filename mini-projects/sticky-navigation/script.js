// JS representation from DOM
const nav = document.querySelector(".nav");

// Event listeners
window.addEventListener("scroll", fixNav);

// Dynamically updates navbar
function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
}
