var button = document.querySelector('.colortoggle');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')

  var imgs = document.getElementsByTagName("img");

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.filter = "invert(100%)";
  }
  // button.style.backgroundImage = "url('public/assets/images/moon-mode.svg')";

});
function change(){
if (button.style.backgroundImage == "url('public/assets/images/moon-mode.svg')") {
  button.style.backgroundImage = "url('public/assets/images/sun-mode.svg')";
} else {
  button.style.backgroundImage = "url('public/assets/images/moon-mode.svg')"

}}