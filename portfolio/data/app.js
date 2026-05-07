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
  let userSoftSkill = document.querySelectorAll(".softSkill");
  for (i = 0; i < userSoftSkill.length; i++) {
    userSoftSkill[i].innerHTML = profileData.skills.softskills[i];
  }
  //   ----
  // language
  let userLanguage = document.querySelectorAll(".userLanguage");
  for (i = 0; i < userLanguage.length; i++) {
    userLanguage[i].innerHTML =
      `${profileData.idiomas[i].nome} - ${profileData.idiomas[i].nivel}`;
  }
  //   ----
  // social media
  let userSocial = document.querySelectorAll(".userSocial");
  for (i = 0; i < userSocial.length; i++) {
    userSocial.innerHTML = `<a href="${profileData.rede}" target="_blank"
              ><i class="bi bi-instagram"></i
            ></a>`;
  }
})();
