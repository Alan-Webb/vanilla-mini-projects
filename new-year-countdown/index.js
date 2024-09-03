const dayEl = document.getElementById("day");

const hourEl = document.getElementById("hour");

const minuteEl = document.getElementById("minute");

const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
  const now = new Date().getTime();
  const gap = newYearTime - now;
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remainingDays = Math.floor(gap / day);
  const remainingHours = Math.floor((gap % day) / hour);
  const remainingMinutes = Math.floor((gap % hour) / minute);
  const remainingSeconds = Math.floor((gap % minute) / second);

  dayEl.innerText = remainingDays;
  hourEl.innerText = remainingHours;
  minuteEl.innerText = remainingMinutes;
  secondEl.innerText = remainingSeconds;

  setTimeout(updateCountdown, 1000);
} 