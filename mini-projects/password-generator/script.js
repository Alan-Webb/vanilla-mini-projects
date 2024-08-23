const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// Generates random lowercase character
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generates random uppercase character
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Generates random number
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generates random symbol
function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());
