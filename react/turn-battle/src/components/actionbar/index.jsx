import "./actionbar.css";
import "../../css/var.css";

const ActionBar = ({onClick, coolDown}) => {
  return (
    <div className="action-bar-container">
      <div className="action-bar">
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("rock")}
        >
          <img
            src="../../src/assets/img/actionbar/rock-icon.png"
            alt="rock icon"
          />
        </button>
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("paper")}
        >
          <img
            src="../../src/assets/img/actionbar/paper-icon.png"
            alt="paper icon"
          />
        </button>
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("scissors")}
        >
          <img
            src="../../src/assets/img/actionbar/scissors-icon.png"
            alt="scissors icon"
          />
        </button>
        <button
          className={`skill ${coolDown}`}
          onClick={() => onClick("dice")}
        >
          <img
            src="../../src/assets/img/actionbar/dice-icon.png"
            alt="dice icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
