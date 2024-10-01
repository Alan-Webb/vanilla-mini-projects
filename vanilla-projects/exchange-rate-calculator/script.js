// JS representation from DOM
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");

const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

// Fetch exchange rates and update DOM
function calculate() {
	const currencyEl_one = currencyEl_one.value;
	const currencyEl_two = currencyEl_two.value;

	console.log("currency_one, currency_two");
}

calculate();
