$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: true,
    dots: true,
  });
  $(".gallery__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        centerMode: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 887,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 476,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  $(".certification__slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".projects__slider").slick({
    dots: false,
    arrows: true
  });

  // Slider Dots
  let dot= $('li[role*="presentation"]').children("button");

  $.each(dot, function (index, elem) {
    $(this).html("0"+ (index+1));
    dot.parent(":last-child").children("button").text("0"+dot.length);
  });
});