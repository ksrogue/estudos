const moves = ["rock", "paper", "scissors"];
let isCooldown = false;
let isGameOver = false;
const gameEnd = document.querySelector(".game-over");

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
    result.innerText = "PLAYER WIN";
    eSprite.classList.add("player-attack");
  } else {
    // inimigo vence;
    pHp = hpRender(damage, pHp, pHpNumber, pHpBar);
    result.innerText = "ENEMY WIN";
    pSprite.classList.add("enemy-attack");
  }
  result.style.opacity = 1;

  isCooldown = true;
  iconState("add");
  if (!isGameOver) {
    setTimeout(onCooldown, 1000);
  } else {
    gameEnd.style.display = "block";
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
    gameOver();
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
  gameEnd.style.display = "block";
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