var mediaQuery = window.matchMedia("(min-width: 768px)");
var navOpen = false;

function navButton() {
  const allNavButtons = document.querySelectorAll(".nav-button .menu");
  for (var i = 0; i < allNavButtons.length; i++) {
    allNavButtons[i].classList.remove("active");
  }
  if (mediaQuery.matches) {
    if (navOpen) {
      document
        .querySelector(".nav-button .desktop.open")
        .classList.add("active");
      document
        .querySelector(".nav-button .desktop.closed")
        .classList.remove("active");
    } else {
      document
        .querySelector(".nav-button .desktop.closed")
        .classList.add("active");
      document
        .querySelector(".nav-button .desktop.open")
        .classList.remove("active");
    }
  } else {
    if (navOpen) {
      document
        .querySelector(".nav-button .mobile.open")
        .classList.add("active");
      document
        .querySelector(".nav-button .mobile.closed")
        .classList.remove("active");
    } else {
      document
        .querySelector(".nav-button .mobile.closed")
        .classList.add("active");
      document
        .querySelector(".nav-button .mobile.open")
        .classList.remove("active");
    }
  }
}
mediaQuery.addEventListener("change", navButton);

function switchNav() {
  navOpen = !navOpen;
  navButton();
  //   All if statements use !navOpen since it has been reversed here
  //   It has been reversed to ensure correct state of navOpen for navButton()

  const navItems = document.querySelectorAll(".nav-item");
  if (mediaQuery.matches) {
    if (!navOpen) {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("desktop-active");
      }
      document.querySelector("nav").classList.remove("active");
    } else {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.add("desktop-active");
      }
      document.querySelector("nav").classList.add("active");
    }
  } else {
    if (!navOpen) {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("mobile-active");
      }
    } else {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.add("mobile-active");
      }
    }
  }
}

function pgLoad() {
  navButton();
  document.querySelector("main").style.opacity = '1';
}

function openLink(link) {
  const animationDurationInSeconds = getComputedStyle(document.body).getPropertyValue('--time');
  const animationDuration = parseInt(animationDurationInSeconds) * 1000;
  setTimeout(function(){
    window.location.href = link;
  }, animationDuration);
}
