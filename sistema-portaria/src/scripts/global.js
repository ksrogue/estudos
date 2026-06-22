const themeBtn = document.querySelector(".theme");
const body = document.querySelector("body");
const infoBtn = document.querySelector(".info");
const infoTxt = document.querySelector(".info-bar");

themeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeBtn.classList.remove("bi-brightness-high-fill");
    themeBtn.classList.add("bi-moon-fill");
  } else {
    themeBtn.classList.remove("bi-moon-fill");
    themeBtn.classList.add("bi-brightness-high-fill");
  }
});

infoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  infoTxt.classList.toggle("showInfo");
  if (infoTxt.classList.contains("showInfo")) {
    infoBtn.classList.remove("bi-info-circle-fill");
    infoBtn.classList.add("bi-x-circle-fill");
    infoTxt.textContent = "em caso de dúvidas, contacte o ZELADOR.";
  } else {
    infoBtn.classList.remove("bi-x-circle-fill");
    infoBtn.classList.add("bi-info-circle-fill");
    infoTxt.textContent = "";
  }
});
