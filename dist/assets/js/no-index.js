// Variables
let breakLg = 992;
let desktop = window.matchMedia(`screen and (min-width: ${breakLg}px)`);

let menuGlobalLg = document.querySelector('.o-containerNavInner');
let headBrand = document.querySelector('.m-containerHeading__brand');
let scrollGlobal = document.querySelector('.m-scroll__containerNavChildren');
let scrollGlobalContainer = document.querySelector('.m-scroll__scrollContainer');
let scrollGlobalContent = document.querySelector('.m-scrollGlobal__content');
let scrollContentLink = document.querySelector('.m-scroll__content');
let headItemHeader = document.querySelector('.m-containerHeading__itemHeader');

let curtainMenu = document.querySelector('.a-curtain');

let burgerButton = document.querySelector('#a-burguerMenu');

let indexContainer = document.querySelector('.o-nav__container');


desktop.addListener(validation)

// function
function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.removeEventListener('click', hideShow)
  }
}
validation(desktop);

function hideShow() {
  if (menuGlobalLg.classList.contains('o-containerNavBlue')) {
    menuGlobalLg.classList.remove('o-containerNavBlue');
    scrollGlobal.classList.remove('-globalMenu');
    scrollGlobalContainer.classList.remove('-globalMenu');
    scrollGlobalContent.classList.add('d-none');
    headBrand.classList.add('d-none');
    scrollContentLink.classList.remove('d-none');
    headItemHeader.classList.remove('d-none');
    curtainMenu.style.opacity = 0;
  }
  else {
    menuGlobalLg.classList.add('o-containerNavBlue');
    scrollGlobal.classList.add('-globalMenu');
    scrollGlobalContainer.classList.add('-globalMenu')
    scrollGlobalContent.classList.remove('d-none');
    headBrand.classList.remove('d-none');
    scrollContentLink.classList.add('d-none');
    headItemHeader.classList.add('d-none');
    curtainMenu.style.opacity = 1;
  }
}