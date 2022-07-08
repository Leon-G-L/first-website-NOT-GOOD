window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

function MenuIcon() {
  const iconMenu = document.querySelector(".iconMenu");
  const Navigation = document.querySelector(".Navigation");
  iconMenu.classList.toggle("active");
  Navigation.classList.toggle("active");
}
