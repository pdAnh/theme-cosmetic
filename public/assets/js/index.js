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
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  })


});


