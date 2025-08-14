document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form && response) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
         response.style.display = "block";
    });
  }

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
});