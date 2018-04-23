$(document).ready(function () {
  $('.banner-carousel').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    center: true,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyload: true,
    smartSpeed: 900,
  })
  $('.list').owlCarousel({
    items: 5,
    dots: false,
    nav: true,
    smartSpeed: 900,
    navSpeed: 200,
    slideBy: 5,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 4,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  })

  $('.ok').owlCarousel({
    items: 3,
    dots: true,
    smartSpeed: 900,
    navSpeed: 200,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      }
    }
  })
});


