/* BUTTON CLICK EVENTS */
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getAnimations("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getAnimations("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});
