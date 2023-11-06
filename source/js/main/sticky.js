"use strict";
(function () {
  const sticky = document.getElementsByClassName("js-sticky")[0];
  const footer = document.querySelector(".footer");
  const links = document.querySelectorAll(".js-nav");
  const vw = window.innerWidth;
  if (!sticky || !links || vw < 1025) return;
  const stickyAnchor = sticky.parentNode;
  let state = false;

  function getAnchorOffset() {
    return stickyAnchor.getBoundingClientRect().top;
  }

  const updateSticky = function (e) {
    const ifBottom = footer.getBoundingClientRect().top < 500;

    if (!state && getAnchorOffset() < 140 && !ifBottom) {
      sticky.classList.add("is-sticky");
      sticky.classList.remove("is-bottom");
      state = true;
    } else if (state && getAnchorOffset() >= 140) {
      sticky.classList.remove("is-sticky");
      state = false;
    } else if (state && ifBottom) {
      sticky.classList.add("is-bottom");
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
