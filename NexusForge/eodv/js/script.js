const name = document.querySelector("#name");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

const formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", (e) => {
  console.log("botão clicado");
  let validForm = true;

  if (name.value.trim().length < 3) {
    errorMsg.innerHTML = "Verifique seus dados.";
    validForm = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    validForm = false;
    showMessage("Verifique seus dados.", "red");
  }

  if (!validForm) {
    e.preventDefault();
    showMessage("Verifique seus dados.", "red");
  } else {
    e.preventDefault();
    showMessage(
      "Inscrição realizada com sucesso! Prepare-se para adentrar o Vazio.",
      "green",
    );
    name.value = "";
    email.value = "";
  }
});

function showMessage(text, color) {
  errorMsg.style.color = color;
  errorMsg.innerHTML = text;
  errorMsg.style.display = "block";
}

function sendToAPI() {
  // plataforma favorita
  // nome
  // email
}
