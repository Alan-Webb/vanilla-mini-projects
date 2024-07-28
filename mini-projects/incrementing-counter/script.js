// JS representation from DOM
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";
});
