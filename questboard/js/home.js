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
const taskList = [];
if (taskList.length == 0) {
  addMission.style.display = "flex";
}
addMissionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addMissionContainer.style.display = "flex";
});

//  salva a missão no array;
const missionName = document.querySelector(".mission-name");
const missionDesc = document.querySelector(".mission-desc");
const inputStatus = document.querySelector(".input-status");
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (missionName.value.trim() !== "" && missionDesc.value.trim() !== "") {
    const randomXp = Math.floor(Math.random() * 9) * 5 + 10;
    const newTask = {
      id: Date.now(),
      name: missionName.value,
      desc: missionDesc.value,
      completed: false,
      xp: randomXp,
    };
    taskList.push(newTask);
    addMissionContainer.style.display = "none";
    missionName.value = "";
    missionDesc.value = "";

    console.log(taskList);
    taskRender();
  } else {
    inputStatus.textContent = "adicione os dados";
  }
});

// renderiza a missão na tela;
