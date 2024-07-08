// REVEAL IMAGE ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(CustomEase, ScrollTrigger);

  if (!CustomEase.get("El")) {
    CustomEase.create("El", "0.64, 0, 0, 1");
  }

  document.querySelectorAll(".reveal-image").forEach((wrapper) => {
    const mediaElement = wrapper.querySelector("img, video");
    if (mediaElement) {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(wrapper, {
            duration: 1.5,
            ease: "El",
            "--after-top": "100%",
          });
          gsap.to(mediaElement, {
            duration: 1.5,
            ease: "El",
            scale: 1,
          });
        },
      });
    }
  });
});
