var button = document.querySelector('.colortoggle');

window.night = true // state

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  window.night = !window.night
  const icon = night ?
    'sun-mode.svg' :
    'moon-mode.svg'
  button.style.backgroundImage = `url('public/assets/images/${icon}')`
  const imgs = document.getElementsByTagName("img")
  if (imgs)
    imgs.forEach(img => { img.style.filter = "invert(100%)" })
});
