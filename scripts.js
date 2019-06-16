'use strict';

(function() {
  const sidenavTriggers = document.querySelectorAll('.sidenav-trigger');
  const sidenav = document.getElementById('sidenav');

  // document.addEventListener('click', hideSidenav);

  for(let trigger of sidenavTriggers) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation()
      if (sidenav.classList.contains('open')) {
        sidenav.classList.remove('open');
        document.removeEventListener('click', hideSidenav)
      } else {
        sidenav.classList.add('open');
        document.addEventListener('click', hideSidenav)
      }
    });
  }

  function hideSidenav(event) {
    if(!sidenav.contains(event.target) && sidenav.classList.contains('open')) {
      document.removeEventListener('click', hideSidenav)
      sidenav.classList.remove('open');
    }
  }
})()