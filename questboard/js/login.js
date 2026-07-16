// const themeButton;
const loginContainer = document.querySelector(".login-container");
const loginButton = document.querySelector(".login-button");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const errorTxt = document.querySelector(".error");

const users = [
  {
    username: "admin",
    password: "admin",
    name: "David",
    level: 1,
    currentXp: 0,
    nextLevelXp: 100,
  },
];


// faz a autenticação do usuário;
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const authUser = users.find(
    (u) => u.username == login.value && u.password === password.value,
  );

  if (authUser) {
    // usuário logado com sucesso.
    sessionStorage.setItem("userLogged", "true");
    window.location.href = "pages/quests.html";
  } else {
    errorTxt.innerHTML = "usuário ou senha inválidos.";
    login.value = "";
    password.value = "";
  }
});
