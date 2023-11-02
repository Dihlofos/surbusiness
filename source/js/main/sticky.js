"use strict";
(function () {
  var sticky = document.getElementsByClassName("js-sticky")[0];
  var stickyAnchor = sticky.parentNode;
  var state = false;

  function getAnchorOffset() {
    return stickyAnchor.getBoundingClientRect().top;
  }

  const updateSticky = function (e) {
    if (!state && getAnchorOffset() < 140) {
      sticky.classList.add("is-sticky");
      state = true;
    } else if (state && getAnchorOffset() >= 140) {
      sticky.classList.remove("is-sticky");
      state = false;
    }
  };

  window.addEventListener("scroll", updateSticky);
  window.addEventListener("resize", updateSticky);

  updateSticky();
})();
