import "./styles.css";
import "../../css/var.css";

import playerSprite from "../../assets/img/player_sprite.png";

const PlayerContainer = (props) => {
  const hpPercentage = (props.pHp / props.pMhp) * 100;
  return (
    <div>
      <div className="player-container">
        <img
          src={playerSprite}
          alt="player sprite"
          className={`player-sprite ${props.anim}`}
        />
        <div className="player-info-container">
          <span className="player-name">{props.name}</span>
          <div className="player-hp-bar">
            <span className="player-hp-number">{`${props.pHp}/${props.pMhp}`}</span>
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
