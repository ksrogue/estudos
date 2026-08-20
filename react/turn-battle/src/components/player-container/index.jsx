import "./styles.css";
import "../../css/var.css";

const PlayerContainer = ({pHp, pMhp, name, anim, sprite, className}) => {
  const hpPercentage = (pHp / pMhp) * 100;
  return (
    <div>
      <div className={`player-container ${className}`}>
        <img
          src={sprite}
          alt="player sprite"
          className={`player-sprite ${anim}`}
        />
        <div className="player-info-container">
          <span className="player-name">{name || "player"}</span>
          <div className="player-hp-bar">
            <span className="player-hp-number">{`${pHp || "0"}/${pMhp || "0"}`}</span>
            <div
              className="player-hp-progress"
              style={{ width: `${hpPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerContainer;
