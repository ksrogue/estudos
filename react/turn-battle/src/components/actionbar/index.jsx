import "./actionbar.css";
import "../../css/var.css";
import { useEffect } from "react";

import rockIcon from "/src/assets/img/actionbar/rock-icon.png";
import paperIcon from "/src/assets/img/actionbar/paper-icon.png";
import scissorsIcon from "/src/assets/img/actionbar/scissors-icon.png";
import diceIcon from "/src/assets/img/actionbar/dice-icon.png";

const ActionBar = ({ onClick, coolDown }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key.toLowerCase()) {
        case "q":
          onClick("rock");
          break;
        case "w":
          onClick("paper");
          break;
        case "e":
          onClick("scissors");
          break;
        case "r":
          onClick("dice");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  return (
    <div className="action-bar-container">
      <div className="action-bar">
        <button className={`skill ${coolDown}`} onClick={() => onClick("rock")}>
          <img src={rockIcon} alt="rock icon" />
        </button>
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("paper")}
        >
          <img src={paperIcon} alt="paper icon" />
        </button>
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("scissors")}
        >
          <img src={scissorsIcon} alt="scissors icon" />
        </button>
        <button className={`skill ${coolDown}`} onClick={() => onClick("dice")}>
          <img src={diceIcon} alt="dice icon" />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
