/* JS REPRESENTATION FROM DOM */
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
}

/* EVENT LISTERNERS */
form.addEventListener("submit", function (e) {
	e.preventDefault();

	if (username.value === "") {
		showError(username, "Username is required");
	} else {
		showSuccess(username);
	}
});
