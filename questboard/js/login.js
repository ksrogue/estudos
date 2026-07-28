// const themeButton;
const loginContainer = document.querySelector(".login-container");
const loginButton = document.querySelector(".login-button");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const errorTxt = document.querySelector(".error");

const users = JSON.parse(localStorage.getItem("users")) || [
  {
    username: "admin",
    password: "admin",
    name: "Giovanna",
    level: 1,
    currentXp: 0,
    nextLevelXp: 1000,
    tasks: [],
  },
];

// faz a autenticação do usuário;
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const authUser = users.find(
    (u) => u.username === login.value && u.password === password.value,
  );

  if (authUser) {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const userToSave =
      savedUser && savedUser.username === authUser.username
        ? savedUser
        : authUser;
    // usuário logado com sucesso.
    localStorage.setItem("user", JSON.stringify(userToSave));
    localStorage.setItem("userLogged", "true");
    window.location.href = "pages/quests.html";
  } else {
    errorTxt.innerHTML = "usuário ou senha inválidos.";
    login.value = "";
    password.value = "";
  }
});

// register
const avatarContainer = document.querySelector(".avatar-menu");
for (let i = 1; i < 10; i++) {
  const item = document.createElement("div");
  item.classList.add("avatar-item");

  avatarContainer.appendChild(item);
}
const avatar = document.querySelector(".avatar-container");
avatar.addEventListener("click", (e) => {
  e.preventDefault();
  avatarContainer.style.display = "grid";
});
const registerContainer = document.querySelector(".register-container");
const registerLink = document.querySelector(".register-link");
registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginContainer.style.display = "none";
  registerContainer.style.display = "flex";
});

const registerBtn = document.querySelector(".register-button");
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name-input").value;
  const login = document.querySelector(".login-input").value;
  const password = document.querySelector(".password-input").value;
  const span = document.querySelector(".register-error");

  if (name.trim() != "" && login.trim() != "" && password.trim() != "") {
    users.find((u) => {
      if (u.username === login) {
        span.innerText = "nome de usuário existente";
        return;
      }
      if (password.length < 8) {
        span.innerText = "requisitos da senha inválidos";
        return;
      }
    });
    const newUser = {
      username: login,
      password: password,
      name: name,
      level: 1,
      currentXp: 0,
      nextLevelXp: 1000,
      tasks: [],
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    name.value = "";
    login.value = "";
    password.value = "";
    changeWindow(loginContainer, registerContainer);
  } else {
    // dados inválidos;
    span.innerText = "dados inválidos!";
  }
});

function changeWindow(open, close) {
  open.style.display = "flex";
  close.style.display = "none";
}
