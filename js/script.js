/* icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll de secciones */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* Navbar */
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* Remove icon navbar */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* Scroll Reveal */
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .skills-img, form', { origin: 'bottom' });
ScrollReveal().reveal('.about-content, .portofolio-content', { origin: 'rigth' });
ScrollReveal().reveal('.about-img, .formation-content', { origin: 'left' });

/* Typed JS */
consttyped = new Typed('.multiple-text', {
  strings: ['Desarrollo Front End.', 'Marketing Digital.', 'Diseño Gráfico.', 'Desarrollo Cloud.', 'Diseño UX/UI.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});