const productCatelogObserver = new IntersectionObserver(
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

productCatelogObserver.observe(document.querySelector("#introduction"));
productCatelogObserver.observe(document.querySelector("#services"));
productCatelogObserver.observe(document.querySelector("#product-showcase"));
productCatelogObserver.observe(
  document.querySelector("#application-development")
);
productCatelogObserver.observe(document.querySelector("#web-development"));
productCatelogObserver.observe(document.querySelector("#iot-development"));
