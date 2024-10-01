// JS representation from DOM
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");

const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("change", calculate);

// Fetch exchange rates and update DOM
function calculate() {}

calculate();
