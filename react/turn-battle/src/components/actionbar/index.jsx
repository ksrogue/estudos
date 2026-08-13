import "./styles.css";
import "../../css/var.css";

const ActionBar = (props) => {
  return (
    <div className="action-bar-container">
      <ul className="action-bar">
        <li className="skill" id="rock"></li>
        <li className="skill" id="paper"></li>
        <li className="skill" id="scissors"></li>
        <li className="skill" id="random"></li>
      </ul>
    </div>
  );
};

export default ActionBar;
