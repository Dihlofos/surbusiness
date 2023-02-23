"use strict";
(function () {

  const container = document.querySelector('.js-animaicons');
  const columns = container.querySelectorAll('.js-animaicons-column');

  columns.forEach((column)=>{
    setInterval(()=>{
      changeVisibility(column);
    }, 1200);
  })



  function changeVisibility(column) {
    const shown = column.querySelector('.is-shown');
    shown.classList.remove('is-shown');
    if (shown.nextSibling !== null) {
      shown.nextSibling.classList.add('is-shown');
    } else {
      column.children[0].classList.add('is-shown');

    }
  }


})();
