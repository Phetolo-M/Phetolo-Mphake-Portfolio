document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio script loaded.");

  // Add smooth scrolling
  document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
