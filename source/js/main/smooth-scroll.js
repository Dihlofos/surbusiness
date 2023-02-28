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
