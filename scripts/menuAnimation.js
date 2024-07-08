// MENU ANIMATION
const navbar = document.querySelector(".sticky-navbar");

$(".menu-nav-button a").click(function (e) {});

gsap.set(".menu-mobile-footer", { opacity: 0 });
gsap.to(".menu-mobile-footer", { opacity: 1, duration: 0.8, delay: 1.5 });

gsap.set(".menu-item a", { y: 40, opacity: 0 });

$(".close-nav").click(function (e) {
  e.preventDefault();
  hideCursor();

  gsap.to(navbar, {
    backgroundColor: "var(--color--background)",
    duration: 0.5,
    delay: 1.4,
  });

  const paths = document.querySelectorAll(".logo path");
  paths.forEach((path) => {
    gsap.to(path, { fill: "CurrentColor", duration: 0.5, delay: 1.2 });
  });

  $("html").removeClass("no-scroll");

  gsap.fromTo(
    ".menu-item a",
    { opacity: 1, y: 0 },
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "menuEase",
      stagger: 0.1,
    }
  );
});

$(".menu-nav-button").click(function (e) {
  e.preventDefault();

  const paths = document.querySelectorAll(".logo path");
  paths.forEach((path) => {
    gsap.to(path, { fill: "white", duration: 0.5, delay: 0.2 });
  });

  $("html").addClass("no-scroll");
  gsap.fromTo(
    ".menu-item a",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "menuEase",
      stagger: 0.1,
      delay: 0.05,
    }
  );
});
