// JS representation from DOM
const container = document.querySelector(".testimonial-slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Event listeners
nextBtn.addEventListener("click", () => {
	const slides = document.querySelectorAll(".slide");
	container.appendChild(slides[0]);
});

prevBtn.addEventListener("click", () => {
	const slides = document.querySelectorAll(".slide");
	container.removeChild(slides.length - 1);
});
