// task template: {"id": 1, "checked": false, "icon": "icon.png", "name":

// tema claro / escuro;
const themeButton = document.querySelector(".theme-btn");
let currentTheme = localStorage.getItem("theme");
const body = document.querySelector("body");
if (currentTheme == "dark-theme") {
  body.classList.add("dark-theme");
}
themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    // tema escuro;
    localStorage.setItem("theme", "dark-theme");
    themeButton.classList.remove("bi-moon-fill");
    themeButton.classList.add("bi-brightness-high-fill");
  } else {
    // tema claro;
    localStorage.setItem("theme", "light-theme");
    themeButton.classList.remove("bi-brightness-high-fill");
    themeButton.classList.add("bi-moon-fill");
  }
});
