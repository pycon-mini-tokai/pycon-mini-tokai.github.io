document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});
