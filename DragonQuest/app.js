// Destaque
let featuredImg = document.querySelector(".featured");
let featuredTitle = document.querySelector(".featured-title");
let featuredText = document.querySelector(".featured-text");

featuredImg.style.backgroundImage = 'url("assets/images/dq11.png")';
featuredTitle.innerText = "Dragon Quest XI";
featuredText.innerText = "Uma aventura inesquecível.";

// Games
let gamesList = [
  { gameSrc: "assets/images/b-placeholder.png", gameAlt: "", gameName: "DQ I" },
  {
    gameSrc: "assets/images/b-placeholder.png",
    gameAlt: "",
    gameName: "DQ II",
  },
  {
    gameSrc: "assets/images/b-placeholder.png",
    gameAlt: "",
    gameName: "DQ III",
  },
  {
    gameSrc: "assets/images/b-placeholder.png",
    gameAlt: "",
    gameName: "DQ IV",
  },
];
const gamesWrapper = document.querySelector(".games-wrapper");
gamesList.forEach((e) => {
  const gameCard = document.createElement("games-card");

  gameCard.setAttribute("game-src", e.gameSrc);
  gameCard.setAttribute("game-alt", e.gameAlt);
  gameCard.setAttribute("game-name", e.gameName);

  gamesWrapper.appendChild(gameCard);
});

// Gallery
let gallery = [
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
  { imgSrc: "assets/images/b-placeholder.png", imgAlt: "" },
];

let galleryContainer = document.querySelector(".gallery-wrapper");

gallery.forEach((i) => {
  let newImage = document.createElement("li");
  newImage.className = "gallery-container";
  newImage.innerHTML = `
            <img
              src="${i.imgSrc}"
              alt="${i.imgAlt}"
              class="gallery-img"
            />
    `;

  galleryContainer.appendChild(newImage);
});

// mudar tema
const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme");
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");
  themeBtn.classList.toggle("bi-brightness-high-fill", !isDark);
  themeBtn.classList.toggle("bi-moon-fill", isDark);

  console.log("tema mudado");
});
