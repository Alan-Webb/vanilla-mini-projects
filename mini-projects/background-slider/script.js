// JS representation from DOM
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// global vars
let activeSlide = 0;

// event listeners
rightBtn.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBgToBody();
	setActiveSlide();
});

setBgToBody();

// sets image to DOM body
function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// creates node list of slides & add/remove active class
function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[activeSlide].classList.add("active");
}
