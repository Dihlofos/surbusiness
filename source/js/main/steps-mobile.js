"use strict";
(function () {
  let steps = document.querySelectorAll(".js-step-item");

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      if (step.classList.contains('is-open')) {
        return;
      } else {
       // clearClasses();
        step.classList.add('is-open');
      }
    })
  })

  function clearClasses() {
    steps.forEach((step) => {
      step.classList.remove('is-open');
    })
  }
})();
