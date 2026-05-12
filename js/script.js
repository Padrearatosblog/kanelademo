const elements = document.querySelectorAll(
  ".intro, .section-heading, .plate, .drink-text, .drink-img, .quote, .location > div"
);

elements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elements.forEach((element) => {
  observer.observe(element);
});