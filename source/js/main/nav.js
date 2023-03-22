"use strict";
(function () {

  const burger = document.querySelector('.js-nav-burger');
  const nav = document.querySelector('.js-nav');
  const links = document.querySelectorAll('.js-link');

  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const options = {
    reserveScrollBarGap: true,
  };

  burger.addEventListener('click', () => {
    toggleNav();
  })

  links.forEach((link)=> {
    link.addEventListener('click', ()=> {
      toggleNav();
    })
  })

  function toggleNav() {
    const timeout = 200;
    burger.classList.toggle('is-open');

    if (nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      enableBodyScroll(nav);
      document.querySelector('html').classList.add('is-locked');

      setTimeout(()=>{
        nav.style.display = 'none'
      }, timeout);
    } else {

      nav.style.display = 'flex'
      disableBodyScroll(nav, options);
      document.querySelector('html').classList.remove('is-locked');

      setTimeout(()=>{
        nav.classList.add('is-open');
      }, 0);


    }
  }



})();
