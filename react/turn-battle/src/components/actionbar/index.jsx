import "./styles.css";
import "../../css/var.css";

const ActionBar = (props) => {
  return (
    <div className="action-bar-container">
      <ul className="action-bar">
        <li className="skill" id="rock">
          <img
            src="../../src/assets/img/actionbar/rock-icon.png"
            alt="rock icon"
          />
        </li>
        <li className="skill" id="paper">
          <img
            src="../../src/assets/img/actionbar/paper-icon.png"
            alt="paper icon"
          />
        </li>
        <li className="skill" id="scissors">
          <img
            src="../../src/assets/img/actionbar/scissors-icon.png"
            alt="scissors icon"
          />
        </li>
        <li className="skill" id="random">
          <img
            src="../../src/assets/img/actionbar/dice-icon.png"
            alt="dice icon"
          />
        </li>
      </ul>
    </div>
  );
};

export default ActionBar;
