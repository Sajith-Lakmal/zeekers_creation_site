const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "scale(1)";
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "scale(1.1)";
      }
    });
  },
  { threshold: [0.0] }
);

observer.observe(document.querySelector("#about-us"));
observer.observe(document.querySelector("#services"));
observer.observe(document.querySelector("#contact-us"));
