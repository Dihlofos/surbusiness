(function () {
  document.body.addEventListener("touchstart", function () {
    var video = document.querySelector('video');
    video.play();
  },{ once: true });
})();
