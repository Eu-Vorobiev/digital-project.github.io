document.addEventListener("DOMContentLoaded", function () {
  // Hamburger
  const btnMenu    = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-mobile");

  btnMenu.addEventListener("click", function() {
    this.classList.toggle("is-active");
    mobileMenu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });

  // Fixed Header
  const header = document.querySelector(".header");

  function fixHeader() {
    if (window.pageYOffset >= header.offsetHeight - 40) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    };
  };

  window.addEventListener('scroll', fixHeader);
});