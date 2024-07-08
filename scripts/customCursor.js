// CUSTOM CURSOR
gsap.registerPlugin(CustomEase);
CustomEase.create("menuEase", "0.64, 0, 0, 1");

const cursor = document.querySelector(".cursor-wrapper");

function hideCursor() {
  gsap.to(cursor, { opacity: 0, duration: 0.02 });
  document.addEventListener("mousemove", showCursor, { once: true });
}

function showCursor() {
  gsap.to(cursor, { opacity: 1, duration: 0.4, delay: 0.2 });
}

document.addEventListener("click", hideCursor);

$(document).ready(function () {
  gsap.set(".cursor-wrapper", { opacity: 0 });

  function showCursor() {
    gsap.to(".cursor-wrapper", { opacity: 1, duration: 0.4 });
  }

  function hideCursor() {
    gsap.to(".cursor-wrapper", { opacity: 0, duration: 0.4 });
  }

  document.addEventListener("mousemove", function () {
    showCursor();
    document.removeEventListener("mousemove", showCursor, { once: true });
  });

  let timeout;
  document.addEventListener("mousemove", function () {
    clearTimeout(timeout);
    timeout = setTimeout(hideCursor, 3000);
  });
});