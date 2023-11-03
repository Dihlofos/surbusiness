"use strict";
(function () {
  var sticky = document.getElementsByClassName("js-sticky")[0];
  const links = document.querySelectorAll(".js-nav");
  if (!sticky || !links) return;
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

    links.forEach((link) => {
      const item = document.getElementById(link.dataset.link);
      if (isInViewport(item)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", updateSticky);
  window.addEventListener("resize", updateSticky);

  updateSticky();

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();

    const myElementHeight = el.offsetHeight - 120;
    const myElementWidth = el.offsetWidth - 120;
    return (
      rect.top >= -myElementHeight &&
      rect.left >= -myElementWidth &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myElementWidth &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myElementHeight
    );
  }
})();
