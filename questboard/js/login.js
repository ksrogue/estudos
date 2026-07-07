// const themeButton;
const themeButton = document.querySelector(".theme-btn");
const loginContainer = document.querySelector(".login-container");
const loginButton = document.querySelector(".login-button");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const errorTxt = document.querySelector(".error");

const users = [
  {
    username: "ksrogue",
    password: "ksrogue123",
  },
];

// tema claro / escuro;
let currentTheme = localStorage.getItem("theme");
const body = document.querySelector("body");
if(currentTheme == "dark-theme") {
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

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const authUser = users.find(
    (u) => u.username == login.value && u.password === password.value,
  );

  if (authUser) {
    // usuário logado com sucesso.
    errorTxt.style.color = "green";
    errorTxt.innerHTML = "usuário logado";
  } else {
    errorTxt.innerHTML = "usuário ou senha inválidos.";
    login.value = "";
    password.value = "";
  }
});
