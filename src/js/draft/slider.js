$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: true,
    dots: true,
    // responsive: [
    //   {
    //     breakpoint: 930,
    //     settings: {
    //       centerMode: true,
    //       centerPadding: '10px',
    //       slidesToShow: 3,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });
  $(".gallery__slider").slick({
    arrows: true,
    dots: false,
    fade: true
  })
});