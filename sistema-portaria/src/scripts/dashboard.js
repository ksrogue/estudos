const menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let icon = document.querySelector(".bi");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x-lg");
  } else {
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-list");
  }
});
