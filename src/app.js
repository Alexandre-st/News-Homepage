// Selector for the menu
const menu = document.querySelector('.header-mobile');
const showMenu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  showMenu.classList.toggle('open');
});