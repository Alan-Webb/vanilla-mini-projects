// JS representation from DOM
const toggles = document.querySelectorAll(".faq-toggle");

// Event listeners
toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
	});
});
