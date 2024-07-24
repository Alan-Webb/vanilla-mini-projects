// JS representation from DOM
const jokeEl = document.getElementById("joke");
const joekBtn = document.getElementById("jokeBtn");

//Event listeners
joekBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", config);

	const data = await res.json();

	jokeEl.innerHTML = data.joke;
}
