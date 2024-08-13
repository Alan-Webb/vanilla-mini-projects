// JS representation from DOM
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");

function getData() {
	header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1595854866399-6a4807ad33ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>';
	title.innerHTML = "Lorem ipsum dolor sit amet.";
	excerpt.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam.";
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/women/66.jpg" />';
	name.innerHTML = "Jean Grey";
	date.innerHTML = "Aug 13. 2024";
}
