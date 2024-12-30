// JS representation from DOM
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

// Event listeners
menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");
});

window.addEventListener("scroll", () => {
	menu.classList.remove("bx-x");
	navlist.classList.remove("open");
});
