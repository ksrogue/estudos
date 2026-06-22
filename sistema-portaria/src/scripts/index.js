let users = [
  {
    username: "admin",
    password: "admin",
    status: "admin",
  },
  {
    username: "david",
    password: "12345",
    status: "porteiro",
  },
];

const login = document.querySelector("#login");
const password = document.querySelector("#password");
const statusTxt = document.querySelector(".form-spn");

const btn = document.querySelector(".form-btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let userType;

  const authUser = users.find(
    (u) => u.username == login.value && u.password === password.value,
  );

  if (authUser) {
    userType = authUser.status;
    // usuário logado;
    loginSuccess(userType);
  } else {
    //  credenciais inválidas;
    statusTxt.style.color = "color: var(--danger);";
    statusTxt.textContent = "usuário ou senha inválidos.";
    login.value = "";
    password.value = "";
  }
});

function loginSuccess(userType) {
  window.location.href = "pages/dashboard.html";
}
