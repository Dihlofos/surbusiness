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
      .addTo(controller);

    // anketa arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 600 : 100,
      triggerElement: ".anketa",
    })
      .setClassToggle(".anketa__circle", "svgdashed-anketa")
      .addTo(controller);

    // footer arrow
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: vw > 1023 ? 300 : 100,
      triggerElement: ".footer",
    })
      .setClassToggle(".footer__arrow", "svgdashed-anketa")
      .addTo(controller);
  }

  function initMobileAnimations() {
    // advantages slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".advantages",
    })
      .setClassToggle(".advantages__block", "slidertudasuda")
      .addTo(controller);

    // stories slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".stories",
    })
      .setClassToggle(".stories .swiper-slide", "slidertudasuda")
      .addTo(controller);

    // steps slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".start",
    })
      .setClassToggle(".start__blocks .start__block", "slidertudasuda")
      .addTo(controller);

    // team slider
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: ".team",
    })
      .setClassToggle(".team__slide", "slidertudasuda")
      .addTo(controller);

    const step1 = document.querySelector(".js-steps-item-1");
    const step2 = document.querySelector(".js-steps-item-2");

    if (step1 && step2) {
      const stepsScene = new ScrollMagic.Scene({
        triggerElement: ".steps",
        offset: 300,
        duration: 1,
      }).addTo(controller);

      stepsScene.on("enter", function () {
        step1.classList.add("animate-open-1");
        step2.classList.add("animate-open-2");
      });

      stepsScene.on("leave", function () {
        setTimeout(() => {
          step1.classList.remove("animate-open-1");
          step2.classList.remove("animate-open-2");
        }, 1500);
      });
    }
  }

  function iniDesktopAnimations() {
    const title = document.querySelector(".js-steps-title");
    const list = document.querySelector(".js-steps-list");
    const items = document.querySelectorAll(".js-steps-item");
    const header = document.querySelector("#header");
    const vh = window.innerHeight;
    const offset = 20;
    if (!title) {
      return;
    }

    const titleHeight = title.clientHeight + 60;
    const headerHeight = header.clientHeight;
    const itemHeight = vh - (titleHeight + headerHeight + offset);

    // Set list height.
    list.style.height = `${itemHeight}px`;
    items.forEach((item, index) => {
      if (index === 1) {
        item.style.marginTop = `${itemHeight - 100}px`;
      }

      if (index === 2) {
        item.style.marginTop = `${itemHeight - 60}px`;
      }
    });

    const secondStepTween = new TimelineMax()
      .to(".js-steps-item:nth-child(2)", 1, { top: `-${itemHeight - 100}` })
      .to(".js-steps-item:nth-child(3)", 1, { top: `-${itemHeight - 60}` });

    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#steps",
      duration: 2500,
      offset: 0,
      triggerHook: "onLeave",
    })
      .setTween(secondStepTween)
      .setPin("#steps")
      .addTo(controller);
  }
})();
