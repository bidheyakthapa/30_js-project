let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollDirection = 1;
let intervalId;
let scrollCount = 0;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

intervalId = setInterval(() => {
  scrollContainer.scrollBy({
    left: 900 * scrollDirection,
    behavior: "smooth",
  });
  scrollCount++;
  if (scrollCount >= 3) {
    scrollDirection *= -1;
    scrollCount = 0;
  }
}, 5000);

// Pause scrolling when mouse hovers over the container
scrollContainer.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

// Resume scrolling when mouse moves out of the container
scrollContainer.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    scrollContainer.scrollBy({
      left: 900 * scrollDirection,
      behavior: "smooth",
    });
    scrollCount++;
    if (scrollCount >= 3) {
      scrollDirection *= -1;
      scrollCount = 0;
    }
  }, 5000);
});
