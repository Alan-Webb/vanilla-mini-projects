// JS representation from DOM
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLength = slideRight.querySelectorAll("div").length;

// Global vars
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

// Event listeners
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Moves slides up and down
const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;
	if (direction === "up") {
		activeSlideIndex++;
		if (activeSlideIndex > slideLength - 1) {
			activeSlideIndex = 0;
		}
	}
	slideRight.style.transform = `translateY(-${
		activeSlideIndex * sliderHeight
	}px)`;
};
