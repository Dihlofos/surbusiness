"use strict";
(function () {
  new Swiper(".js-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
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
