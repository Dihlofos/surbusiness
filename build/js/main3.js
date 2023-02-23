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


    // const secondStepTween = new TimelineMax()
    //   .to(".js-step-item:nth-child(2)", 1, {top: "-410"})
    //   .to(".js-step-item:nth-child(3)", 1, {top: "-540"})



    // // build scene
    // new ScrollMagic.Scene({triggerElement: "#steps", duration: 2000, offset: 470})
    //   .setTween(secondStepTween)
    //   .setPin("#steps")
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
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
  const MARQUEE_CHECK_INTERVAL = 1000;4

  const marquee = document.querySelector('.js-marquee');
  const marqueeText = [];
  let marqueeLeft = 0;
  let marqueeMoveInterval = null;
  let marqueeCheckInterval = null;

  initMarquee();


  function initMarquee() {
    for (let i = 0; i < marquee.children.length; i++) {
     marqueeText.push(marquee.children[i].innerText);
    }
    marquee.innerHTML = '';
    mountMarquee();
   }

   function addItemsToMarquee() {
    marqueeText.forEach(item => {
     const p = document.createElement('p');
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
     marquee.style.left = `${marqueeLeft}px`;
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
  const modal = document.querySelector('.js-modal');
  const modalOpen = document.querySelectorAll('.js-modal-open');
  const modalOpenStep1 = document.querySelector('.js-modal-open-step-1');
  const modalClose = document.querySelectorAll('.js-modal-close');
  const toStepOneButton = document.querySelector('.js-step-go-1');

  // Steps
  const steps = document.querySelectorAll('.js-step');

  // Form
  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const options = {
    reserveScrollBarGap: true,
  };

  modalOpenStep1.addEventListener('click', ()=> {
    showStep(1);
    openModal();
  })

  // Event Listeners
  modalOpen.forEach((openButton)=>{
    openButton.addEventListener('click', ()=> {
      openModal();
    })
  })

  modalClose.forEach((button) => {
    button.addEventListener('click', () => {
      closeModal();
    })

  })

  toStepOneButton.addEventListener('click', ()=> {
    showStep(1);
  })

   // Actions
  initForm();

  // Functions

  function openModal() {
    modal.style.display = 'flex'
      setTimeout(()=>{
        modal.classList.add('is-open');

        disableBodyScroll(modal, options);
      },0)
  }

  function closeModal() {
    modal.classList.remove('is-open');
      setTimeout(()=>{
        modal.style.display = 'none'
        clearSteps();
        enableBodyScroll(modal);
      },200)
  }
  function clearSteps() {
    steps.forEach((step,index)=> {
      if (index === 0) {
        step.classList.remove('visually-hidden')
      } else {
        step.classList.add('visually-hidden')
      }
    })
  }

  function showStep(stepIndex) {
    steps.forEach((step,index)=> {
      if (index === stepIndex) {
        step.classList.remove('visually-hidden')
      } else {
        step.classList.add('visually-hidden')
      }
    })
  }


  function initForm() {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
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
            console.log("all correct, but not do anything further");
            showStep(2);
            // sendEmail(res);
          })
          .catch((error) => {
            showStep(3);
          });
      });
    });
  }

  function sendEmail({ name, email, phone, message }) {
    formSubmitButton.setAttribute("disabled", true);
    Email.send({
      SecureToken : "e5954290-31df-4abf-b5aa-8bb1d285f13a",
      To : 'info@vektoruspeha.com',
      From : "info@vektoruspeha.com",
      Subject: `${name} sent you a message`,
      Body: `
        <p><h4>Здравствуйте, меня зовут: ${name}</h4></p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Адрес электронной почты:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    })
      .then((message) => {
        formDone.style.opacity = 1;
      })
      .catch((error) => {
        formWrong.style.opaciy = 1;
      });
  }



})();

"use strict";
(function () {

  const burger = document.querySelector('.js-nav-burger');
  const nav = document.querySelector('.js-nav');
  const links = document.querySelectorAll('.js-link');

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const options = {
    reserveScrollBarGap: true,
  };

  burger.addEventListener('click', () => {
    toggleNav();
  })

  links.forEach((link)=> {
    link.addEventListener('click', ()=> {
      toggleNav();
    })
  })

  function toggleNav() {
    const timeout = 200;
    burger.classList.toggle('is-open');

    if (nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      enableBodyScroll(nav);

      setTimeout(()=>{
        nav.style.display = 'none'
      }, timeout);
    } else {

      nav.style.display = 'flex'
      disableBodyScroll(nav, options);

      setTimeout(()=>{
        nav.classList.add('is-open');
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
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

"use strict";
(function () {
  let steps = document.querySelectorAll(".js-step-item");

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      step.classList.toggle('is-open')
    })
  })
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

(function () {
  document.body.addEventListener("touchstart", function () {
    var video = document.querySelector('video');
    video.play();
  },{ once: true });
})();
