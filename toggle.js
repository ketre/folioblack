button = document.querySelector('.colortoggle');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
});