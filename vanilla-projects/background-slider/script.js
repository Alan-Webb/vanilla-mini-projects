// JS representation from DOM
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Global vars
let activeSlide = 0;

// Event listeners
rightBtn.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener("click", () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	setBgToBody();
	setActiveSlide();
});

setBgToBody();

// sets image to DOM body
function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Add/remove active class
function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[activeSlide].classList.add("active");
}
