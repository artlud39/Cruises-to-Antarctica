import MoveTo from 'moveto';

const moveTo = new MoveTo({
  duration: 1000,
});

const advantageTarget = document.getElementById('advantage');
const introTarget = document.getElementById('intro');
const cruisesTarget = document.getElementById('cruises');
const contactsTarget = document.getElementById('contacts');
const linkAdvantage = document.querySelector('a[href="#advantage"]');
const linkIntro = document.querySelector('a[href="#intro"]');
const linkCruises = document.querySelector('a[href="#cruises"]');
const linkContacts = document.querySelector('a[href="#contacts"]');

function scrollSmooth() {
  linkAdvantage.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(advantageTarget);
  });

  linkIntro.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(introTarget);
  });

  linkCruises.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(cruisesTarget);
  });

  linkContacts.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(contactsTarget);
  });
}
export {scrollSmooth};
