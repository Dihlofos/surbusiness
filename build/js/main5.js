"use strict";
(function () {

  const container = document.querySelector('.js-animaicons');
  const columns = container.querySelectorAll('.js-animaicons-column');

  columns.forEach((column)=>{
    setInterval(()=>{
      changeVisibility(column);
    }, 1200);
  })



  function changeVisibility(column) {
    const shown = column.querySelector('.is-shown');
    shown.classList.remove('is-shown');
    if (shown.nextSibling !== null) {
      shown.nextSibling.classList.add('is-shown');
    } else {
      column.children[0].classList.add('is-shown');

    }
  }


})();

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

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };
  }
})();

"use strict";
(function () {
  const MARQUEE_START_COUNT = 3;
  let MARQUEE_MOVE_INTERVAL = 15;
  const MARQUEE_MOVE_STEP = 0.4;
  const MARQUEE_CHECK_INTERVAL = 1000;

  const marquee = document.querySelector(".js-marquee");
  const marqueeText = [];
  let marqueeLeft = 0;
  let marqueeMoveInterval = null;
  let marqueeCheckInterval = null;
  if (!marquee) {
    return;
  }

  initMarquee();

  function initMarquee() {
    for (let i = 0; i < marquee.children.length; i++) {
      marqueeText.push(marquee.children[i].innerText);
    }
    marquee.innerHTML = "";
    mountMarquee();
  }

  function addItemsToMarquee() {
    marqueeText.forEach((item) => {
      const p = document.createElement("p");
      p.innerText = item;
      marquee.appendChild(p);
    });
  }

  function mountMarquee() {
    for (let i = 0; i < MARQUEE_START_COUNT; i++) {
      addItemsToMarquee();
    }

    marqueeMoveInterval = setInterval(() => {
      marqueeLeft -= MARQUEE_MOVE_STEP;
      // marquee.style.left = `${marqueeLeft}px`;
      marquee.style.transform = `translateX(${marqueeLeft}px)`;
    }, MARQUEE_MOVE_INTERVAL);

    marqueeCheckInterval = setInterval(() => {
      const marqueeChildren = marquee.children;
      const lastChildOfMarquee = marqueeChildren[marqueeChildren.length - 1];
      const { left } = lastChildOfMarquee.getBoundingClientRect();
      if (left > window.innerWidth) return;
      addItemsToMarquee();
    }, MARQUEE_CHECK_INTERVAL);
  }
})();

"use strict";
(function () {
  // Modal open/close
  const modal = document.querySelector(".js-modal");
  const modalOpen = document.querySelectorAll(".js-modal-open");
  const modalOpenStep1 = document.querySelectorAll(".js-modal-open-step-1");
  const modalClose = document.querySelectorAll(".js-modal-close");
  const toStepOneButton = document.querySelector(".js-step-go-1");

  // Steps
  const steps = document.querySelectorAll(".js-step");

  // Form
  const form = document.querySelector(".js-form");
  const formArticle = document.querySelector(".js-form-article");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const phoneField = document.querySelector("#phone");
  const phoneFieldError = document.querySelector(".js-phone-field-error");
  let formInvalid = false;

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const errorMap = [
    "Номер телефона неверный",
    "Неправильный код страны",
    "Номер слишком короткий",
    "Номер слишком длинный",
    "Номер телефона неверный",
  ];

  const options = {
    reserveScrollBarGap: true,
  };

  document.documentElement.style.setProperty(
    "--window-inner-height",
    `${window.innerHeight}px`
  );

  function syncHeight() {
    document.documentElement.style.setProperty(
      "--window-inner-height",
      `${window.innerHeight}px`
    );
  }

  window.addEventListener("resize", syncHeight);

  const iti = window.intlTelInput(phoneField, {
    initialCountry: "ru",
  });

  modalOpenStep1.forEach((button) => {
    button.addEventListener("click", () => {
      showStep(1);
      openModal();
    });
  });

  // Event Listeners
  modalOpen.forEach((openButton) => {
    openButton.addEventListener("click", () => {
      openModal();
    });
  });

  modalClose.forEach((button) => {
    button.addEventListener("click", () => {
      closeModal();
    });
  });

  toStepOneButton.addEventListener("click", () => {
    showStep(1);
  });

  // Actions
  initForm();

  // Functions

  function openModal() {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("is-open");

      // disableBodyScroll(modal, options);
      // document.querySelector('html').classList.add('is-locked');
    }, 0);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    setTimeout(() => {
      modal.style.display = "none";
      clearSteps();
      // enableBodyScroll(modal);

      // document.querySelector('html').classList.remove('is-locked');
    }, 200);
  }
  function clearSteps() {
    steps.forEach((step, index) => {
      if (index === 0) {
        step.classList.remove("visually-hidden");
      } else {
        step.classList.add("visually-hidden");
      }
    });
  }

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.remove("visually-hidden");
      } else {
        step.classList.add("visually-hidden");
      }
    });
  }

  function initForm() {
    if (!form) return;

    phoneField.addEventListener("blur", function () {
      phoneFieldValidate();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (formInvalid) return;
      formSubmitButton.classList.add("disabled");
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LczUdEaAAAAACImrHbKWiSSutDmsNCH1sC9zXbu", {
            action: "submit",
          })
          .then(function (token) {
            let res = {};
            const formData = new FormData(form);

            for (let [key, value] of formData.entries()) {
              res[key] = value;
            }
            console.log("all correct, but not do anything further", res);
            sendEmail(res);
          })
          .catch((error) => {
            showStep(3);
          });
      });
    });
  }

  function sendEmail({ name, email, phone, message }) {
    const additionalText = formArticle
      ? "Хочу получить бесплатную бета-версию стратегии продвижения для вашего бизнеса"
      : "";
    formSubmitButton.setAttribute("disabled", true);
    Email.send({
      SecureToken: "b03e26ab-3244-4815-bd29-bd9edccd5aea",
      To: "business@suragency.ru",
      From: "business@suragency.ru",
      Subject: `${name} отправил вам сообщение`,
      Body: `
        ${additionalText.length ? `<p>${additionalText}</p>` : ""}
        <p><h4>Здравствуйте, меня зовут: ${name}</h4></p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Адрес электронной почты:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    })
      .then((message) => {
        showStep(2);
      })
      .catch((error) => {
        showStep(3);
      })
      .finally(() => {
        formSubmitButton.classList.remove("disabled");
        form.reset();
      });
  }

  function phoneFieldValidate() {
    if (phoneField.value.trim()) {
      if (iti.isValidNumber()) {
        phoneField.classList.remove("error");
        phoneFieldError.textContent = "";
        formInvalid = false;
      } else {
        phoneField.classList.add("error");
        var errorCode = iti.getValidationError();
        const errorMessage =
          errorMap[errorCode] ?? "Введите корректный номер телефона";
        phoneFieldError.textContent = errorMessage;
        formInvalid = true;
      }
    }
  }
})();

"use strict";
(function () {
  const burger = document.querySelector(".js-nav-burger");
  const nav = document.querySelector(".js-nav");
  const links = document.querySelectorAll(".js-link");

  if (!burger) {
    return;
  }

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const options = {
    reserveScrollBarGap: true,
  };

  burger.addEventListener("click", () => {
    toggleNav();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggleNav();
    });
  });

  function toggleNav() {
    const timeout = 200;
    burger.classList.toggle("is-open");

    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      // enableBodyScroll(nav);
      // document.querySelector('html').classList.add('is-locked');

      setTimeout(() => {
        nav.style.display = "none";
      }, timeout);
    } else {
      nav.style.display = "flex";
      // disableBodyScroll(nav, options);
      // document.querySelector('html').classList.remove('is-locked');

      setTimeout(() => {
        nav.classList.add("is-open");
      }, 0);
    }
  }
})();

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

"use strict";
(function () {
  const header = document.querySelector('#header');
  const headerHeight = header.clientHeight;
  console.log('headerHeight', headerHeight);
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
    offset: header.clientHeight,
  });
})();

"use strict";
(function () {
  let steps = document.querySelectorAll(".js-steps-item");

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      if (step.classList.contains('js-steps-item-last')) {
        return;
      }
      step.classList.toggle('is-open')
    })
  })
})();

"use strict";
(function () {
  const sticky = document.getElementsByClassName("js-sticky")[0];
  const footer = document.querySelector(".footer");
  const links = document.querySelectorAll(".js-nav");
  const vw = window.innerWidth;
  if (!sticky || !links || vw < 1025) return;
  const stickyAnchor = sticky.parentNode;
  let state = false;

  function getAnchorOffset() {
    return stickyAnchor.getBoundingClientRect().top;
  }

  const updateSticky = function (e) {
    const ifBottom = footer.getBoundingClientRect().top < 500;

    if (!state && getAnchorOffset() < 140 && !ifBottom) {
      sticky.classList.add("is-sticky");
      sticky.classList.remove("is-bottom");
      state = true;
    } else if (state && getAnchorOffset() >= 140) {
      sticky.classList.remove("is-sticky");
      state = false;
    } else if (state && ifBottom) {
      sticky.classList.add("is-bottom");
      sticky.classList.remove("is-sticky");
      state = false;
    }

    links.forEach((link) => {
      const item = document.getElementById(link.dataset.link);
      if (isInViewport(item)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", updateSticky);
  window.addEventListener("resize", updateSticky);

  updateSticky();

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();

    const myElementHeight = el.offsetHeight - 120;
    const myElementWidth = el.offsetWidth - 120;
    return (
      rect.top >= -myElementHeight &&
      rect.left >= -myElementWidth &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myElementWidth &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myElementHeight
    );
  }
})();

"use strict";
(function () {
  const swot = document.querySelector(".js-swot");
  if (!swot) {
    return;
  }
  const button = swot.querySelector(".js-swot-more-button");
  const vw = window.innerWidth;
  if (!swot || vw > 767) {
    return;
  }
  swot.classList.add("swot-short");
  button.addEventListener("click", () => {
    swot.classList.remove("swot-short");
  });
})();

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
