"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 150 : 150;

  const commonOptions = {
    reverse: false,
    offset,
    triggerHook: "onEnter",
  };

  initCommonAnimations();

  if (vw < 1023) {
    initMobileAnimations();
  }


  function initCommonAnimations() {
    // hero circle
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: ".hero",
    })
      .setClassToggle(".hero__bottom-circle", "svgdashed")
      .addTo(controller);


    // recieave arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 0,
      triggerElement: ".receive",
    })
      .setClassToggle(".receive__arrow", "svgdashed-arrow")
      .addTo(controller)
      .addIndicators();

    // anketa arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 600 : 100,
      triggerElement: ".anketa",
    })
      .setClassToggle(".anketa__circle", "svgdashed-anketa")
      .addTo(controller)
      .addIndicators();

    // footer arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 300 : 100,
      triggerElement: ".footer",
    })
      .setClassToggle(".footer__arrow", "svgdashed-anketa")
      .addTo(controller)
      .addIndicators();
  }

  function initMobileAnimations() {
    // advantages slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      reverse: true,
      triggerElement: ".advantages",
    })
      .setClassToggle(".advantages__block", "slidertudasuda")
      .addTo(controller)
      .addIndicators();

    // stories slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      reverse: true,
      triggerElement: ".stories",
    })
      .setClassToggle(".stories .swiper-slide", "slidertudasuda")
      .addTo(controller)
      .addIndicators();

    // steps slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      reverse: true,
      triggerElement: ".start",
    })
      .setClassToggle(".start__blocks .start__block", "slidertudasuda")
      .addTo(controller)
      .addIndicators();

    // team slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      reverse: true,
      triggerElement: ".team",
    })
      .setClassToggle(".team__slide", "slidertudasuda")
      .addTo(controller)
      .addIndicators();

  }




})();
