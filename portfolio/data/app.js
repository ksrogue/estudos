(async () => {
  const profileData = await fetchProfileData();
  console.log(profileData);

  // header
  let userName = document.getElementById("nome");
  let userImg = document.querySelector(".img");
  let userRole = document.querySelector(".role");
  let userLocal = document.querySelector(".local");
  let userTel = document.querySelector(".tel");
  let userEmail = document.querySelector(".email");

  userName.innerHTML = profileData.nome;
  userImg.src = `assets/${profileData.img}`;
  userRole.innerHTML = profileData.titulo;
  userLocal.innerHTML = profileData.localidade;
  userTel.innerHTML = profileData.telefone;
  userEmail.innerHTML = profileData.email;
  // ----
  //   skills
  
})();
