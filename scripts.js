'use strict';




const sidenavTriggers = document.querySelectorAll('.sidenav-trigger');
const sidenav = document.getElementById('sidenav');

document.addEventListener('click', hideSidenav);

for(let trigger of sidenavTriggers) {
  trigger.addEventListener('click', toggleSidenav);
}

function toggleSidenav() {
  sidenav.classList.toggle('open');
}

function hideSidenav(event) {
  if(!event.target.closest('.sidenav') && !event.target.closest('.header__icon')) {
    sidenav.classList.remove('open');
  }
}
