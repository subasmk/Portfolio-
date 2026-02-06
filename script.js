/* Typing Effect */
const texts = [
  "Aspiring Data Scientist",
  "Web Developer",
  "Designer & Editor",
  "Lifelong Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (count === texts.length) count = 0;

  let fullText = texts[count];

  if (!isDeleting) {
    currentText = fullText.slice(0, ++index);
  } else {
    currentText = fullText.slice(0, --index);
  }

  document.getElementById("typing").textContent = currentText;

  if (index === fullText.length) {
    isDeleting = true;
  } else if (index === 0 && isDeleting) {
    isDeleting = false;
    count++;
  }

  setTimeout(typeEffect, 120);
}

typeEffect();

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});