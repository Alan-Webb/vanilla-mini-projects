// JS representation from DOM
const password = document.getElementById("password");
const background = document.getElementById("background");

// Event listeners
password.addEventListener("input", (e)=>{
  const input = e.target.value;
  console.log(input);
})