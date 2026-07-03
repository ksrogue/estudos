// task template: {"id": 1, "checked": false, "icon": "icon.png", "name": "task_name",  "desc": "task_description", "time": 60, "xp": 50}
const questContainer = document.querySelector(".quests-container");
const questCheckBox = document.querySelector(".quest-status");
const greetings = document.querySelector(".greetings");
const user = "David";

function renderGreetings() {
  const time = Date.now();
  const now = new Date(time);
  const hours = now.getHours().toString();

  if (hours >= 0 && hours < 12) {
    greetings.textContent = `Bom dia, ${user}!`;
  } else if (hours >= 12 && hours <= 18) {
    greetings.textContent = `Boa tarde, ${user}!`;
  } else {
    greetings.textContent = `Boa noite, ${user}!`;
  }
}

renderGreetings();

function getLevel() {
  const levelText = document.querySelector(".level-text");
  let level = 0;
  for (let i = 0; i < 5; i++) {
    level++;
  }
  levelText.textContent = "Nível " + level;
}
getLevel();

function renderMission(quest) {
  questContainer.innerHTML = "";

  quest.forEach((task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("quest");
    newTask.innerHTML = `
    <input type="checkbox" class="quest-status">
    <div class="icon">
        <img src="assets/images/icons/${task.icon}">
    </div>
    <div class="desc-wrapper">
        <h3 class="quest-title">${task.name}</h3>
        <span class="quest-desc">${task.desc}</span>
        <span class="quest-goal">0/${task.time}min</span>
    </div>
    <div class="xp-reward">
        <span class="xp-number">+${task.xp}</span>
        <span>XP</span>
    </div>
    `;
    questContainer.appendChild(newTask);
  });
}

// adicionar as tasks a array e depois renderizar na tela
async function getMissionData() {
  try {
    const response = await fetch("js/tasks.json");
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
    }
    const tasks = await response.json();
    renderMission(tasks);
  } catch (error) {
    console.error("Houve um problema com a requisição fetch:", error);
  }
}

getMissionData();
