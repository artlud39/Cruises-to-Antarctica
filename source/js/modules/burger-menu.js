const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.burger');

navMain.classList.remove('main-nav--nojs');

function openMainMenu() {
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
