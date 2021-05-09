button = document.querySelector('.colortoggle');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')

  var imgs = document.getElementsByTagName("img");

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.filter = "invert(100%)";
  }
});