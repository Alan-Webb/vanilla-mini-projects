const imgs = document.getElementById("imgs");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const img = document.querySelectorAll("#imgs, img");

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
  idx ++;
  changeImage();
}

function changeImage() {
  if (idx > img.length -2) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length -2;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

nextBtn.addEventListener("click", () => {
  idx ++;
  changeImage();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  idx --;
  changeImage();
  resetInterval();
});