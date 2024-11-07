// JS Representation from DOM
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// Word list
const words = [
	"sigh",
	"tense",
	"airplane",
	"ball",
	"pies",
	"juice",
	"warlike",
	"bad",
	"north",
	"dependent",
	"steer",
	"silver",
	"highfalutin",
	"superficial",
	"quince",
	"eight",
	"feeble",
	"admit",
	"drag",
	"loving",
];

// Global Vars
let randomWord;
let score = 0;
let time = 10;

// Generate random word from array
function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}
