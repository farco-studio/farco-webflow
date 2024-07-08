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
