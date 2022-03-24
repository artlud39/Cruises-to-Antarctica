const navMain = document.querySelector('[data-main-nav]');
const navToggle = document.querySelector('[data-burger]');
const body = document.querySelector('body');
const pageHeader = document.querySelector('.page-header');

function openMainMenu() {
  navMain.classList.remove('main-nav--nojs');
  pageHeader.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      body.classList.add('scroll-lock');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navToggle.classList.add('burger--opened');
    } else {
      body.classList.remove('scroll-lock');
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.remove('burger--opened');
    }
  });
  window.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.main-nav') && !target.closest('.burger')) {
      closeMainMenu();
    }
  });
}

function closeMainMenu() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navToggle.classList.remove('burger--opened');
  body.classList.remove('scroll-lock');
}

export {openMainMenu, closeMainMenu};

