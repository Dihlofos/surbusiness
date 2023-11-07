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
