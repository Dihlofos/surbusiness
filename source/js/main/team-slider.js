"use strict";
(function () {
  new Swiper(".js-slider-team", {
    // Optional parameters
    loop: false,
    slidesPerView: 'auto',
    speed: 1000,
    navigation: {
      nextEl: ".swiper__next-team",
      prevEl: ".swiper__prev-team",
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },

      1025: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });



})();
