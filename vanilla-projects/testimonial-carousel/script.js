let indicatorButtons = document.getElementsByClassName("indicator-button");
let testimonialCards = document.getElementsByClassName("testimonial-card");
let isActive = false;
for (let i = 0; i < indicatorButtons.length; i++) {
	indicatorButtons[i].addEventListener("click", function () {
		for (let j = 0; j < indicatorButtons.length; j++) {
			indicatorButtons[j].classList.remove("active");
			testimonialCards[j].style.opacity = "0";
		}
		isActive = true;
		if (isActive) {
			indicatorButtons[i].classList.add("active");
			testimonialCards[i].style.opacity = "100%";
		}
	});
}
