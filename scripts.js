'use strict';

const sidenavTriggers = document.querySelectorAll('.sidenav-trigger');
const sidenav = document.getElementById('sidenav');

// document.addEventListener('click', hideSidenav);

for(let trigger of sidenavTriggers) {
  trigger.addEventListener('click', toggleSidenav);
}

function toggleSidenav() {
  if (sidenav.classList.contains('open')) {
    sidenav.classList.remove('open');
    document.removeEventListener('click', hideSidenav)
  } else {
    sidenav.classList.add('open');
    setTimeout(() => document.addEventListener('click', hideSidenav), 600) // transition duration
  }
}

function hideSidenav(event) {
  if(!sidenav.contains(event.target) && sidenav.classList.contains('open')) {
    document.removeEventListener('click', hideSidenav)
    sidenav.classList.remove('open');
  }
}
