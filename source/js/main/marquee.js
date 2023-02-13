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
