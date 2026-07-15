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

// array com as tarefas que serão adicionadas;
const tasks = [];

// mostrar container de adicionar missão;
const addTaskContainer = document.querySelector(".add-task-container");
const newTaskContainer = document.querySelector(".new-task-container");
const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  cardRender(newTaskContainer, addTaskContainer, "flex");
});

// renderiza os icones;
const iconContainer = document.querySelector(".icon-container");
for (let i = 1; i < 10; i++) {
  const newIcon = document.createElement("img");
  newIcon.classList.add("item");
  newIcon.src = `../assets/images/icons/icon${i}.png`;
  iconContainer.appendChild(newIcon);
}

// captura os dados dos inputs;
const icons = document.querySelectorAll(".item");
const icon = document.querySelector(".icon-img");
let newSrc;
icon.addEventListener("click", () => {
  iconContainer.style.display = "grid";
});

icons.forEach((i) => {
  i.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("selected"));
    i.classList.add("selected");
    icon.src = i.src;
    iconContainer.style.display = "none";
  });
});
function randomNumber() {
  const randomNumber = (Math.floor(Math.random() * (10 - 2 + 1)) + 2) * 10;
  return randomNumber;
}
const inputName = document.querySelector(".input-name");
const inputDesc = document.querySelector(".input-desc");
const createTaskBtn = document.querySelector(".create-task-btn");
const warningText = document.querySelector(".warning-text");
const taskContainer = document.querySelector(".task-container");
createTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputName.value.trim() !== "" && inputDesc.value.trim() !== "") {
    const newTask = {
      id: tasks.length + 1,
      checked: false,
      src: icon.src,
      name: inputName.value,
      desc: inputDesc.value,
      xp: randomNumber(),
    };
    tasks.push(newTask);

    clearInput();
    taskRender();
    warningText.style.display = "none";

    cardRender(addTaskContainer, newTaskContainer, "flex");
  } else {
    warningText.style.display = "block";
    console.log("dados inválidos");
  }
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  cardRender(addTaskContainer, newTaskContainer, "flex");
  clearInput();
  iconContainer.style.display = "none";
});

function clearInput() {
  inputName.value = "";
  inputDesc.value = "";
  icon.src = "../assets/images/icons/icon1.png";
}

function taskRender() {
  taskContainer.innerHTML = "";
  tasks.forEach((t) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <div class="button-container">
              <div class="check-button"></div>
              <div class="del-button" onclick="deleteTask(${t.id - 1})">
                <i class="bi bi-trash3-fill"></i>
              </div>
            </div>
            <div class="task-icon">
              <img src="${t.src}" alt="icone da tarefa">
            </div>
            <div class="text-container">
              <h3 class="task-name">${t.name}</h3>
              <span class="task-description">${t.desc}</span>
            </div>
            <div class="exp-container">
              <p class="exp">+${t.xp}</p>
              <span>XP</span>
            </div>
    `;

    taskContainer.appendChild(newTask);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  taskRender();
}

function cardRender(open, close, type) {
  open.style.display = type;
  close.style.display = "none";
}

// todo: adicionar comportamento no botão de marcar e de apagar;
// todo: salvar a array em localstorage;
// todo: mostrar o nome do usuário logado;
// todo: atualizar o progresso da experiencia e salvar no localstorage;
