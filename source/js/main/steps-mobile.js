"use strict";
(function () {
  let steps = document.querySelectorAll(".js-step-item");

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      if (step.classList.contains('js-step-item-last')) {
        return;
      }
      step.classList.toggle('is-open')
    })
  })
})();
