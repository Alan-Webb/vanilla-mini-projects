// JS representation from DOM
const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardEl = [];

// Store card data
const cardsData = [
	{
		question: "What must a variable begin with?",
		answer: "A letter, $ or _",
	},
	{
		question: "What is a variable?",
		answer: "Container for a piece of data",
	},
	{
		question: "Example of Case Sensitive Variable",
		answer: "thisIsAVariable",
	},
];

// Create all cards
function createCards() {
	cardData.forEach((data, index) => createCard(data, index));
}
