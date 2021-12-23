let customerFeedbackIndex = 0;
setInterval(() => {
  const customerFeedbacks = document.querySelectorAll(".customer-feedback");
  customerFeedbacks.forEach((value, index) => {
    if (index === customerFeedbackIndex) {
      value.style.display = "flex";
      value.style.scale = 1;
    } else {
      value.style.display = "none";
      value.style.scale = 1.1;
    }
  });
  if (customerFeedbackIndex === customerFeedbacks.length - 1) {
    customerFeedbackIndex = 0;
  } else {
    customerFeedbackIndex++;
  }
}, 8000);

const observer = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
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

observer.observe(document.querySelector(".introduction"));
observer.observe(document.querySelector(".product-catelog"));
observer.observe(document.querySelector(".customer-feedbacks"));
// observer.observe(document.querySelector("contact-us"));
