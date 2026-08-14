import "./styles.css";
import "../../css/var.css";

import enemySprite from "../../assets/img/enemy_sprite.png";

const EnemyContainer = (props) => {
  const hpPercentage = (props.eHp / props.eMhp) * 100;
  return (
    <div className="enemy-container">
      <div className="info-container">
        <span className="enemy-name">{props.name}</span>
        <div className="enemy-hp-bar">
          <span className="enemy-hp-number">{`${props.eHp}/${props.eMhp}`}</span>
          <div
            className="enemy-hp-progress"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
      </div>
      <img src={enemySprite} alt="enemy sprite" className={`enemy-sprite ${props.anim}`} />
    </div>
  );
};

export default EnemyContainer;
