$('.reviews').slick({
  dots: false,
  arrows: true,
  infinite: true,
  pauseOnHover: true,
  pauseOnFocuse: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i><span>',
  nextArrow:
    '<span class="next-arrow"><i class="fas fa-angle-right"></i><span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
})
