const menuBtns = document.querySelectorAll(".material-icons.menu");
const header = document.querySelector(".header");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
});
