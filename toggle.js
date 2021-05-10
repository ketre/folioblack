var button = document.querySelector('.colortoggle');
function change(click) {
  if (button.style.backgroundImage == "url('public/assets/images/sun-mode.svg')") {
    button.style.backgroundImage = "url('public/assets/images/moon-mode.svg')";
  } else {
    button.style.backgroundImage = "url('public/assets/images/sun-mode.svg')"
  }
}

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  var imgs = document.getElementsByTagName("img");
  change();
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.filter = "invert(100%)";
  }
  // button.style.backgroundImage = "url('public/assets/images/moon-mode.svg')";

});
