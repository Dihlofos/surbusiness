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

  if (vw <= 767) {
    initMobileAnimations();
  }

  if (vw > 1023) {
    iniDesktopAnimations();
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

    // anketa arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 600 : 100,
      triggerElement: ".anketa",
    })
      .setClassToggle(".anketa__circle", "svgdashed-anketa")
      .addTo(controller)

    // footer arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 300 : 100,
      triggerElement: ".footer",
    })
      .setClassToggle(".footer__arrow", "svgdashed-anketa")
      .addTo(controller)



  }

  function initMobileAnimations() {
    // advantages slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".advantages",
    })
      .setClassToggle(".advantages__block", "slidertudasuda")
      .addTo(controller)

    // stories slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".stories",
    })
      .setClassToggle(".stories .swiper-slide", "slidertudasuda")
      .addTo(controller)

    // steps slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".start",
    })
      .setClassToggle(".start__blocks .start__block", "slidertudasuda")
      .addTo(controller)

    // team slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".team",
    })
      .setClassToggle(".team__slide", "slidertudasuda")
      .addTo(controller)

  }

  function iniDesktopAnimations() {
    const secondStepTween = new TimelineMax()
    .to(".js-step-item:nth-child(2)", 1, {top: "-450"})
    .to(".js-step-item:nth-child(3)", 1, {top: "-558"})



    // build scene
    new ScrollMagic.Scene({triggerElement: "#steps", duration: 2000, offset: 470})
      .setTween(secondStepTween)
      .setPin("#steps")
      .addTo(controller);

  }




})();
