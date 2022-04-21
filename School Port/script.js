const navBars = document.getElementById("nav-bar");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const navItems = [nav1, nav2, nav3];

// Nav animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.reaplace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function navMenu() {
  // Open Menu
  navBars.classList.toggle("change");
  // Menu open/close
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("slide-left", "slide-right");
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("slide-right", "slide-left");
    navAnimation("in", "out");
  }
}

navBars.addEventListener("click", navMenu);
navItems.forEach((nav) => {
  nav.addEventListener("click", navMenu);
});
