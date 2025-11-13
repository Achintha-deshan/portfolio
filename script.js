window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");
  requestAnimationFrame(() => {
    navbar.classList.add("show");
  });
});
