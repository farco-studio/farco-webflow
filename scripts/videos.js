document.querySelectorAll(".video-cta").forEach((item) => {
  let isClicked = false;
  const videoElement = item.querySelector(".video-play video");
  const preview = item.querySelector(".video-preview");
  const label = item.querySelector(".label-md");
  const playLabel = item.querySelector(".video-play-label.desktop .video-cta");

  item.addEventListener("click", async () => {
    isClicked = !isClicked;
    item.classList.toggle("is-clicked", isClicked);

    if (isClicked) {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        await videoElement.load(); // Ensure the video is reset
        videoElement.muted = false;
        await videoElement
          .play()
          .catch((error) => console.error("Error playing video:", error));
      }
      gsap.to(preview, {
        opacity: 0,
        display: "none",
        duration: 0.5,
        delay: 0.3,
      });
      if (label) label.textContent = "Close";
      if (playLabel) playLabel.textContent = "Close";
    } else {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        await videoElement.load(); // Ensure the video is reset
        videoElement.muted = true;
        await videoElement
          .play()
          .catch((error) => console.error("Error playing video:", error));
      }
      gsap.to(preview, { opacity: 1, display: "block", duration: 0.2 });
      if (label) label.textContent = "Play";
      if (playLabel) playLabel.textContent = "Play";
    }
  });

  if (videoElement) {
    videoElement.addEventListener("ended", () => {
      videoElement.currentTime = 0;
      videoElement
        .play()
        .catch((error) =>
          console.error("Error playing video after end:", error)
        );
    });
  }
});
