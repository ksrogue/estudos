const avatarImg = document.querySelector(".avatar-img");
const avatarName = document.querySelector(".avatar-name");
const classSpan = document.querySelector(".class-span");
const classCard = document.querySelectorAll(".class-card");
const colorInput = document.querySelector("#color");
let randomIndex;
const maleNames = [
  "Arandir",
  "Arthur",
  "Merlinth",
  "Allioth",
  "Jester",
  "Gareth",
  "Illith",
  "Jannus",
  "Drogon",
  "Irleth",
  "Thorus",
];

colorInput.addEventListener("input", (e) => {
  let selectedColor = e.target.value;
  avatarImg.style.filter = `drop-shadow(1px 1px 5px ${selectedColor})`;
});

function selectClass(newClass) {
  randomIndex = Math.floor(Math.random() * maleNames.length);
  avatarName.innerHTML = maleNames[randomIndex];
  classCard.forEach((card) => {
    card.classList.remove("selected");
  });
  if (newClass == 0) {
    classCard[0].classList.add("selected");
    avatarImg.src = `assets/images/void-warrior.png`;
    classSpan.innerHTML = "classe selecionada: Guerreiro do Vazio.";
  } else if (newClass == 1) {
    classCard[1].classList.add("selected");
    avatarImg.src = `assets/images/arcane-mage.png`;
    classSpan.innerHTML = "classe selecionada: Mago Arcano.";
  } else {
    classCard[2].classList.add("selected");
    avatarImg.src = `assets/images/dark-ranger.png`;
    classSpan.innerHTML = "classe selecionada: Caçador Sombrio.";
  }
}
const saveBtn = document.querySelector(".save-btn");
saveBtn.addEventListener("click", () => {
  document.querySelector(".btn-confirmed").style.display = "block";
});
