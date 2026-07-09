// const userLogged = sessionStorage.getItem("userLogged") === "true";
const userLogged = true;
if (!userLogged)
  document.querySelector("body").innerHTML =
    `<h1 style="text-align: center">O usuário precisa estar logado.</h1>`;
//  texto de saudação;
const greetings = document.querySelector(".greetings");
const time = new Date();

function greetingsMessage() {
  const hour = time.getHours();

  if (hour >= 12 && hour < 18) {
    greetings.innerHTML = "BOA TARDE, DAVID!";
  } else if (hour >= 18 && hour <= 23) {
    greetings.innerHTML = "BOA NOITE, DAVID!";
  } else {
    greetings.innerHTML = "BOM DIA, DAVID!";
  }
}

greetingsMessage();

// tarefas;
const tasks = document.querySelector(".tasks");
const addMission = document.querySelector(".add-mission");
const addMissionBtn = document.querySelector(".add-mission-btn");
const addMissionContainer = document.querySelector(".add-mission-container");

// pega os dados do json;

async function getTaskData() {
  try {
    const response = await fetch("../js/tasks.json");

    if (!response.ok) {
      throw new Error("erro na requisição da api " + response.status);
    }
    // renderiza as missões na tela;
    const data = await response.json();
    data.forEach((task) => {
      const newTask = document.createElement("div");
      newTask.classList.add("task-container");
      newTask.innerHTML = `
          <div class="checkbox" onclick="checkTask(${task.id}, ${task.xp})"></div>
          <div class="task-img"></div>
          <div class="text-container">
            <h3 class="task-title">${task.name}</h3>
            <span class="task-desc">${task.desc}</span>
          </div>
          <div class="task-xp">
            <div class="task-number">+${task.xp}</div>
            <span>XP</span>
          </div>
      `;

      tasks.appendChild(newTask);
    });
  } catch (error) {
    console.error(`houve um erro:`, error);
  }
}
getTaskData();

//  adiciona o efeito a missão selecionada;
function checkTask(id, xp) {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes[id - 1].classList.add("checked");
  checkboxes[id - 1].textContent = "X";
  checkboxes[id - 1].onclick = null;

  getXp(xp);
}

let currentXp = 0;
let level = 1;
function getXp(xp) {
  const xpBar = document.querySelector(".xp-progress");
  const levelNumber = document.querySelector(".level-number");

  const newXp = currentXp + xp;
  currentXp = newXp;
  xpBar.style.width = `${newXp}%`;

  while (currentXp >= 100) {
    currentXp -= 100;
    level++;
    levelNumber.textContent = `nível ${level}`;
    xpBar.style.width = `${currentXp}%`;
  }
}
