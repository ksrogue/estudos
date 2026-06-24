// Destaque
let featuredImg = document.querySelector(".featured");
let featuredTitle = document.querySelector(".featured-title");
let featuredText = document.querySelector(".featured-text");

featuredImg.style.backgroundImage = 'url("assets/images/dq11.png")';
featuredTitle.innerText = "Dragon Quest XI";
featuredText.innerText = "Uma aventura inesquecível.";
// News
let newsList = [
  {
    newsImg: "",
    newsTitle:
      "Dragon Quest XII é finalmente anunciado, mas inteiramente refeito.",
    newsTime: "",
  },
];

// Games
let gamesList = [
  { gameSrc: "assets/images/dq1.png", gameAlt: "", gameName: "DQ I" },
  {
    gameSrc: "assets/images/dq2.png",
    gameAlt: "",
    gameName: "DQ II",
  },
  {
    gameSrc: "assets/images/dq3.png",
    gameAlt: "",
    gameName: "DQ III",
  },
  {
    gameSrc: "assets/images/dq4.png",
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
  { imgSrc: "assets/images/gallery/gallery-1.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-2.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-3.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-4.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-5.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-6.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-7.png", imgAlt: "" },
  { imgSrc: "assets/images/gallery/gallery-8.png", imgAlt: "" },
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
// Toggle Menu
const menuBar = document.querySelector(".menu-bar");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  menuBar.classList.toggle("show");
  if (menuBar.classList.contains("show")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
  } else {
    menuIcon.classList.add("bi-list");
    menuIcon.classList.remove("bi-x-lg");
  }
}

// Switch Theme
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeBtn = document.querySelector(".theme");
let currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark-theme") {
  body.classList.add("dark-theme");
  logo.src = "assets/images/logo-dark.png";
} else {
  logo.src = "assets/images/logo-light.png";
}
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");
  themeBtn.classList.toggle("bi-brightness-high-fill", !isDark);
  themeBtn.classList.toggle("bi-moon-fill", isDark);
  if (isDark) {
    logo.src = "assets/images/logo-dark.png";
    localStorage.setItem("theme", "dark-theme");
  } else {
    logo.src = "assets/images/logo-light.png";
    localStorage.setItem("theme", "light-theme");
  }

  console.log("tema mudado");
});
