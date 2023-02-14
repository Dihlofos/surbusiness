"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 150 : 150;

  if (vw > 1023) {
    initAnimationsDesktop();
  }


  function initAnimationsDesktop() {


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

(function () {
  const pins = document.querySelectorAll('.js-pin');
  const vw = window.innerWidth;

  pins.forEach((pin)=>{
    if (!isTouchDevice() || vw > 1023) {
      pin.addEventListener('mouseover', () => {
        toggleOpen(pin);
      })

      pin.addEventListener('mouseout', () => {
        pin.classList.toggle('open');
      })
    } else {
      pin.addEventListener('click', () => {
        toggleOpen(pin)
        clearAllExcept(pin);

      })
    }

  })

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
  }

  function toggleOpen(pin)  {
    pin.classList.toggle('open');

      if (pin.dataset.pin === '4' && vw < 768) {
        const pin6 = document.querySelector('[data-pin="6"]');
        if (pin6.classList.contains('open')) {
          pin6.classList.remove('open')
        }
      }
  }

  function clearAllExcept(onePin) {
    pins.forEach((pin)=>{
      if (onePin.dataset.pin === pin.dataset.pin) {
        return;
      }
      pin.classList.remove('open')
    })

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

      nav.style.display = 'block'
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
    loop: false,
    slidesPerView: 'auto',
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },

      1025: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
  });

  if (isTouchDevice()) {
    const slides = document.querySelectorAll('.js-slider .swiper-slide');
    slides.forEach((slide)=>{
      slide.addEventListener('click', ()=>{
        slide.classList.toggle('hover');
      })
    })

} else {
    return;
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}


})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

(function () {
  document.body.addEventListener("touchstart", function () {
    var video = document.querySelector('video');
    video.play();
  },{ once: true });
})();
