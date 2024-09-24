"use strict";

const data = [
	"Designer",
	"Developer",
	"Web designer",
	"Web Developer",
	"Login Form in HTML & CSS",
	"How to learn HTML & CSS",
	"How to become a Freelancer",
	"How to become a Web Designer",
	"How to start a Gaming Channel",
	"How to start a YouTube Channel",
	"Whta does HTML stand for?",
	"What does CSS stand for?",
	"Python",
	"Udemy",
];

// JS representaion from DOM
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector(".input-field");
const autoBox = document.querySelector(".autobox");
const btn = document.querySelector(".btn");
const linkEl = searchWrapper.querySelector("a");

let GoogleLink;

// Event listeners
inputBox.addEventListener("keyup", (e) => {
	let userData = e.target.value;
	let emptyArray = [];

	if (userData) {
		btn.addEventListener("click", () => {
			GoogleLink = `https://www.google.com/search?q=${userData}`;
			linkEl.setAttribute("href", GoogleLink);
			linkEl.click();
		});

		emptyArray = data.filter((para) => {
			return para.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map((liEl) => {
			return (liEl = "<li>" + liEl + "</li>");
		});

		searchWrapper.classList.add("active");
		showSuggestion(emptyArray);
	} else {
	}
});

function showSuggestion(list) {
	let listData;

	if (!list.length) {
		let userValue = inputBox.value;
		listData = `<li> ${userValue} </li>`;
	} else {
		listData = list.join(" ");
	}
	autoBox.innerHTML = listData;
}
