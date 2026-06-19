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
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "Email inválido.";
    errorMsg.style.display = "block";
  }

  if (!validForm) {
    e.preventDefault();
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "Verifique seus dados.";
    errorMsg.style.display = "block";
  } else {
    e.preventDefault();
    errorMsg.style.color = "green";
    errorMsg.innerHTML =
      "Inscrição realizada com sucesso! Prepare-se para adentrar o Vazio.";
    errorMsg.style.display = "block";
  }
});


function sendToAPI() {
    // plataforma favorita
    // nome
    // email
}
