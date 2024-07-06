/* D20 */
d20.onclick = function(){
  const d20 = document.getElementById("d20");
  const label = document.getElementById("roll20");
  const min = 1;
  const max = 20;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}

/* D6 */
d6.onclick = function(){
  const d6 = document.getElementById("d6");
  const label = document.getElementById("roll6");
  const min = 1;
  const max = 6;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}

/* D8 */
d8.onclick = function(){
  const d8 = document.getElementById("d8");
  const label = document.getElementById("roll8");
  const min = 1;
  const max = 8;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}

/* D12 */
d12.onclick = function(){
  const d20 = document.getElementById("d12");
  const label = document.getElementById("roll12");
  const min = 1;
  const max = 12;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}

/* D10 */
d10.onclick = function(){
  const d20 = document.getElementById("d10");
  const label = document.getElementById("roll10");
  const min = 1;
  const max = 10;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}

/* D4 */
d4.onclick = function(){
  const d20 = document.getElementById("d4");
  const label = document.getElementById("roll4");
  const min = 1;
  const max = 4;
  let randomNum;
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}