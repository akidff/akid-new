/* =========================
   Typing Animation
========================= */

const typingTexts = [
  "Video Editor",
  "Motion Designer",
  "Content Creator",
  "YouTube Editor",
  "Short Form Expert"
];

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  currentText = typingTexts[textIndex];

  if (!isDeleting) {

    typingElement.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;

      if (textIndex >= typingTexts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


/* =========================
   Project Filter System
========================= */

function filterProjects(category) {

  const projects =
    document.querySelectorAll(".project");

  projects.forEach(project => {

    if (category === "all") {

      project.style.display = "block";

    } else {

      if (
        project.classList.contains(category)
      ) {

        project.style.display = "block";

      } else {

        project.style.display = "none";

      }
    }
  });
}


/* =========================
   Smooth Scroll
========================= */

const navLinks =
document.querySelectorAll('.sidebar a');

navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute('href')
    );

    target.scrollIntoView({
      behavior: 'smooth'
    });

  });

});


/* =========================
   Active Sidebar Highlight
========================= */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 200;

    if (
      pageYOffset >= sectionTop
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});


/* =========================
   Scroll Reveal Animation
========================= */

const revealElements =
document.querySelectorAll(
".glass-card, .project, .service-box"
);

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight =
    window.innerHeight;

    const elementTop =
    element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("show");

    }

  });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();