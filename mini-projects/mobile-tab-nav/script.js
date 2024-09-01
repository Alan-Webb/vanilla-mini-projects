// JS representaion from DOM
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
	item.addEventListener("click", () => {
		hideAllContents();
		hideAllItems();
	});
});
