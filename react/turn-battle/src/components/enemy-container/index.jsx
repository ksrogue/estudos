import "./styles.css";
import "../../css/var.css";

const EnemyContainer = ({eHp, eMhp, name, anim, sprite}) => {
  const hpPercentage = (eHp / eMhp) * 100;
  return (
    <div className="enemy-container">
      <div className="info-container">
        <span className="enemy-name">{name || "enemy"}</span>
        <div className="enemy-hp-bar">
          <span className="enemy-hp-number">{`${eHp || "0"}/${eMhp || "0"}`}</span>
          <div
            className="enemy-hp-progress"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
      </div>
      <img src={sprite} alt="enemy sprite" className={`enemy-sprite ${anim}`} />
    </div>
  );
};

export default EnemyContainer;
