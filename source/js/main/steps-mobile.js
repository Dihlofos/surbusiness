"use strict";
(function () {
  let steps = document.querySelectorAll(".js-step-item");

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      step.classList.toggle('is-open')
    })
  })
})();
