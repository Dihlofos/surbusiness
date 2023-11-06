"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 300 : 150;

  const commonOptions = {
    reverse: false,
    offset,
    triggerHook: "onEnter",
  };

  //intro button
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".hero__bottom",
  })
    .setClassToggle(".hero__bottom", "fromTop")
    .addTo(controller);

  // //order items
  document.querySelectorAll(".animaicons__column").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: item,
    })
      .setClassToggle(item, "fromTop")
      .addTo(controller);
  });

  //navigation
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".article__nav-wrapper",
  })
    .setClassToggle(".article__nav-wrapper", "showFromRotate")
    .addTo(controller);

  //intro
  document.querySelectorAll(".art-intro-anim").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset - 100,
      triggerElement: item,
    })
      .setClassToggle(item, "fadeIn")
      .addTo(controller);
  });

  // approval
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".art-approval__title",
  })
    .setClassToggle(".art-approval__title", "fromTop")
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".art-approval__text",
  })
    .setClassToggle(".art-approval__text", "fromBottom")
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".approval-anim-text",
  })
    .setClassToggle(".approval-anim-text", "fromTop")
    .addTo(controller);

  document.querySelectorAll(".approval-step").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset - 100,
      triggerElement: item,
    })
      .setClassToggle(item, "fadeIn")
      .addTo(controller);
  });

  // strategy
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".art-strategy__title",
  })
    .setClassToggle(".art-strategy__title", "fromTop")
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".art-strategy__description",
  })
    .setClassToggle(".art-strategy__description", "fromBottom")
    .addTo(controller);

  document.querySelectorAll(".art-strategy__item").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fromDeepRight")
      .addTo(controller);
  });

  // steps
  document.querySelectorAll(".art-steps__item").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fromBottom")
      .addTo(controller);
  });

  // packing
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".art-packing__title",
  })
    .setClassToggle(".art-packing__title", "fromTop")
    .addTo(controller);

  document.querySelectorAll(".art-packing__text-block").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fromBottom")
      .addTo(controller);
  });

  document.querySelectorAll(".art-packing__subtitle").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fromTop")
      .addTo(controller);
  });

  document.querySelectorAll(".art-packing__images").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fadeIn")
      .addTo(controller);
  });

  document.querySelectorAll(".article__title").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset,
      triggerElement: item,
    })
      .setClassToggle(item, "fromTop")
      .addTo(controller);
  });
})();
