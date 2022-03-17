const navMain = document.querySelector('[data-main-nav]');
const navToggle = document.querySelector('[data-burger]');

function openMainMenu() {
  navMain.classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navToggle.classList.add('burger--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.remove('burger--opened');
    }
  });
}

export {openMainMenu};
