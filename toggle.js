var button = document.querySelector('#button')
window.night = true // state

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  window.night = !window.night
  const icon = night ?
    'sun-mode.svg' :
    'moon-mode.svg'
  button.style.backgroundImage = `url('public/assets/images/${icon}')`
  const imgs = document.getElementsByTagName("img")
  for (var i=0; i<imgs.length; i++){
    imgs.i.style.filter = "invert(100%)";}
});

$(window).scroll(function() {
  if ($(this).scrollTop()> 20) {
      $('#button').fadeOut();
   }
  else {
    $('#button').fadeIn();
   }
});