const moves = ["rock", "paper", "scissors"];

let isCooldown = false;
let isGameOver = false;
const restartBtn = document.querySelector(".restart");

const damage = 33;

let pMove;
let eMove;

let pHp = 100;
let pHpNumber = document.querySelector(".player-hp-number");
let pHpBar = document.querySelector(".player-progress");
const pIcon = document.querySelector(".p-icon");
const pSprite = document.querySelector(".player-sprite");

let eHp = 100;
let eHpNumber = document.querySelector(".enemy-hp-number");
let eHpBar = document.querySelector(".enemy-progress");
const eIcon = document.querySelector(".e-icon");
const eSprite = document.querySelector(".enemy-sprite");

const result = document.querySelector(".winner-container");
const soundButton = document.querySelector(".sound-button");
const sound = document.querySelector(".sound");
const swordSound = document.querySelector(".sword-slash");
const soundIcon = document.querySelector(".sound-icon");
let isMuted = false;

// onclick dos botões;
const skills = document.querySelectorAll(".skill");
skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    if (isCooldown || isGameOver) return;
    randomMove();
    const playerMove = skill.id;
    if (playerMove === "dice") {
      // jogada aleatória;
      battle(pMove, eMove);
    } else {
      battle(playerMove, eMove);
    }
  });
});

// batalha;
function battle(player, enemy) {
  const playerWin =
    (player === "rock" && enemy === "scissors") ||
    (player === "scissors" && enemy === "paper") ||
    (player === "paper" && enemy === "rock");

  pIcon.src = `assets/${player}-icon.png`;
  eIcon.src = `assets/${enemy}-icon.png`;

  if (player === enemy) {
    // empate;
    result.innerText = "DRAW";
  } else if (playerWin) {
    // jogador vence;
    eHp = hpRender(damage, eHp, eHpNumber, eHpBar);
    swordSound.play();
    result.innerText = "PLAYER WIN";
    eSprite.classList.add("player-attack");
  } else {
    // inimigo vence;
    pHp = hpRender(damage, pHp, pHpNumber, pHpBar);
    result.innerText = "ENEMY WIN";
    pSprite.classList.add("enemy-attack");
  }

  isCooldown = true;
  iconState("add");
  if (!isGameOver) {
    setTimeout(onCooldown, 1000);
  }
}

// jogada aleatória;
function randomMove() {
  pMove = moves[Math.floor(Math.random() * moves.length)];
  eMove = moves[Math.floor(Math.random() * moves.length)];
}

// renderização e atualização da vida;
function hpRender(damage, hp, hpNumber, hpBar) {
  hp -= damage;
  if (hp <= 0) {
    hp = 0;
    isGameOver = true;
    setTimeout(gameOver, 100);
  }
  hpNumber.textContent = `${hp}/100`;
  hpBar.style.width = `${hp}%`;

  return hp;
}

// cooldown;
function onCooldown() {
  iconState("remove");
  isCooldown = false;
  pSprite.classList.remove("enemy-attack");
  eSprite.classList.remove("player-attack");
}

// gameover;
function gameOver() {
  console.log(pHp, eHp);
  if (eHp <= 0) {
    eSprite.src = "assets/enemy_down_sprite.png";
  }
  if (pHp <= 0) {
    pSprite.src = "assets/player_down_sprite.png";
  }
  restartBtn.style.display = "block";
  result.innerText = "GAME OVER";
  iconState("add");
}

function iconState(state) {
  skills.forEach((s) => {
    state === "add"
      ? s.classList.add("inactive")
      : s.classList.remove("inactive");
    s.disabled = true;
  });
}

// restart
restartBtn.addEventListener("click", () => {
  isGameOver = false;
  isCooldown = false;
  iconState("remove");

  pHp = 100;
  pHpNumber.innerText = `${pHp}/100`;
  pHpBar.style.width = `${pHp}%`;
  pSprite.src = "assets/player_sprite.png";

  eHp = 100;
  eHpNumber.innerText = `${eHp}/100`;
  eHpBar.style.width = `${eHp}%`;
  eSprite.src = "assets/enemy_sprite.png";

  restartBtn.style.display = "none";
  result.innerText = "GAME START";
});

// mute button;
soundButton.addEventListener("click", () => {
  if (!isMuted) {
    sound.pause();
    isMuted = true;
    soundIcon.classList.remove("bi-volume-down-fill");
    soundIcon.classList.add("bi-volume-mute-fill");
  } else {
    sound.play();
    isMuted = false;
    soundIcon.classList.remove("bi-volume-mute-fill");
    soundIcon.classList.add("bi-volume-down-fill");
  }
});