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
