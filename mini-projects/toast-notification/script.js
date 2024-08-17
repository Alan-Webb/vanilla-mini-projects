// JS representation from DOM
const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
	"Message One",
	"Message Two",
	"Message Three",
	"Message Four",
];

// Event listeners
button.addEventListener("click", () => createNotification());

// Dynamically generates message div
function createNotification() {
	const notif = document.createElement("div");
	notif.classList.add("toast");

	notif.innerText = getRandomMessage();

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

// Generates messages
function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
