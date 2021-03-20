document.addEventListener("DOMContentLoaded", function () {
  // Hamburger
  const btnMenu    = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-mobile");

  btnMenu.addEventListener("click", function() {
    this.classList.toggle("is-active");
    mobileMenu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });
});