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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })



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

      setTimeout(()=>{
        nav.style.display = 'none'
      }, timeout);
    } else {

      nav.style.display = 'block'
      disableBodyScroll(nav, options);

      setTimeout(()=>{
        nav.classList.add('is-open');
      }, 0);


    }
  }



})();
