const testimonials = [
  {
    name: 'Babs Mahoney',
    photoUrl: "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Weyland Yutani's Egg Collector has helped my team and I stay on the same page. Previously, we were all over the board. Using Weyland Yutani's Egg Collector has definitely saved us time and money."
  },
  {
    name: 'Crabby McDuff',
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Weyland Yutani's Egg Collector makes me more productive and gets the job done in a fraction of the time. I'm glad I found Weyland Yutani's Egg Collector."
  },
  {
    name: 'Spartacus Wells',
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "With Weyland Yutani's Egg Collector, communication between all of us is far more efficient. A game changer."
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx]
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++
  if(idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}