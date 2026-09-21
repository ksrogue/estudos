import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMesage] = useState("");
  const [selectedTool, setSelectedTool] = useState("hoe");
  const [money, setMoney] = useState(0);
  const [crops, setCrops] = useState([
    { id: 1, status: "normal", progress: 0 },
    { id: 2, status: "normal", progress: 0 },
    { id: 3, status: "normal", progress: 0 },
    { id: 4, status: "normal", progress: 0 },
    { id: 5, status: "normal", progress: 0 },
    { id: 6, status: "normal", progress: 0 },
    { id: 7, status: "normal", progress: 0 },
    { id: 8, status: "normal", progress: 0 },
    { id: 9, status: "normal", progress: 0 },
  ]);
  const [seed, setSeed] = useState({ name: "wheat", value: 0, sellValue: 10, time: 10, qty: 3});

  const handleTool = (tool) => {
    setSelectedTool(tool);
  };

  const handleCrop = (currentCrop) => {
    if(currentCrop.status === "arado" && seed.qty <= 0) {
      setMesage("Você não tem sementes!");
      return;
    }
    const canInteract =
      (currentCrop.status === "normal" && selectedTool === "hoe") ||
      (currentCrop.status === "arado" && selectedTool === "wheat") ||
      (currentCrop.status === "plantado" && selectedTool === "water");
    const canHarvest = currentCrop.progress >= 100;

    if (canHarvest) {
      setMoney((prev) => prev + 5);
      setCrops((prevCrop) =>
        prevCrop.map((crop) =>
          crop.id === currentCrop.id
            ? { ...crop, status: "normal", progress: 0 }
            : crop,
        ),
      );
      return;
    }

    if (canInteract) {
      let currentStatus;
      switch (selectedTool) {
        case "hoe":
          currentStatus = "arado";
          break;
        case "wheat":
          currentStatus = "plantado";
          break;
        case "water":
          currentStatus = "molhado";
          break;
        default:
          "";
      }
      setCrops((prevCrop) =>
        prevCrop.map((crop) =>
          crop.id === currentCrop.id
            ? { ...crop, status: currentStatus }
            : crop,
        ),
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCrops((prevCrops) =>
        prevCrops.map((crop) => {
          if (crop.status === "molhado" && crop.progress < 100) {
            const nextProgress = crop.progress + seed.time;

            return {
              ...crop,
              progress: nextProgress,
              status: nextProgress >= 100 ? "pronto" : "molhado",
            };
          }
          return crop;
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="top-bar">
        <h1>My Little Farm</h1>
        <div className="menu">
          <div className="money">
            <span>Dinheiro: {money}R$</span>
          </div>
        </div>
      </div>
      <div className="tools-container">
        <button
          className={selectedTool === "hoe" ? "selected-tool" : ""}
          onClick={() => handleTool("hoe")}
        >
          hoe
        </button>
        <button
          className={selectedTool === "wheat" ? "selected-tool" : ""}
          onClick={() => handleTool("wheat")}
        >
          wheat
        </button>
        <button
          className={selectedTool === "water" ? "selected-tool" : ""}
          onClick={() => handleTool("water")}
        >
          water
        </button>
      </div>

      <div className="crop-grid">
        {crops.map((crop) => (
          <span
            key={crop.id}
            className={`grid ${crop.status}`}
            onClick={() => handleCrop(crop)}
          >
            <div>{crop.status}</div>
            {crop.status === "molhado" && (
              <div className="crop-progress">{crop.progress}%</div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
