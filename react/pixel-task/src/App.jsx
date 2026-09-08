import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), text: "ksrogue", checked: false },
  ]);
  const [taskInput, setTaskInput] = useState("");
  const [status, setSatus] = useState({ code: "", text: "" });

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: taskInput.trim(),
        checked: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setSatus({ code: "success", text: "tarefa adicionada com sucesso!" });
      setTimeout(() => {
        resetInput();
      }, 1500);
    } else {
      setSatus({ code: "error", text: "texto da tarefa inválido!" });
    }
  };

  const handleCheckTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const handleDelTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSatus({ code: "success", text: "tarefa apagada!" });
    setTimeout(() => {
      resetInput();
    }, 1500);
  };

  const resetInput = () => {
    setTaskInput("");
    setSatus({ code: "", text: "" });
  };
  return (
    <div className="app-container">
      <h1 className="header-title">BEM VINDO, AVENTUREIRO(A)!</h1>

      <section className="add-task-container">
        <input
          type="text"
          className="add-input"
          maxLength={32}
          onChange={handleInput}
          value={taskInput}
        />
        <button className="add button" onClick={handleAddTask}>
          +
        </button>
      </section>
      <span className={`status-message ${status.code}`}>{status.text}</span>

      <ul className="task-container">
        {tasks.map((task, id, checked) => (
          <li
            key={task.id}
            className={`task-item ${task.checked ? "checked" : ""}`}
          >
            <span>{task.text}</span>
            <div className="button-container">
              <button
                className="check button"
                onClick={() => handleCheckTask(task.id)}
              >
                <i className="bi bi-check-lg"></i>
              </button>
              <button
                className="del button"
                onClick={() => handleDelTask(task.id)}
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
