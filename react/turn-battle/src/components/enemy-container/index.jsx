import "./styles.css";
import "../../css/var.css"

import enemySprite from "../../assets/img/enemy_sprite.png";

const EnemyContainer = (props) => {
  return (
    <div className="enemy-container">
      <div className="info-container">
        <span className="enemy-name">{props.name}</span>
        <div className="enemy-hp-bar">
            <span className="enemy-hp-number">100/100</span>
            <div className="enemy-hp-progress"></div>
        </div>
      </div>
      <div className="sprite-container">
        <img src={enemySprite} alt="enemy sprite" />
      </div>
    </div>
  );
}

export default EnemyContainer;
