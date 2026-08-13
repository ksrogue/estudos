import "./styles.css";
import "../../css/var.css";

import playerSprite from "../../assets/img/player_sprite.png";

const PlayerContainer = (props) => {
  return (
    <div>
      <div className="player-container">
        <div className="player-sprite-container">
          <img src={playerSprite} alt="player sprite" />
        </div>
        <div className="player-info-container">
          <span className="player-name">{props.name}</span>
          <div className="player-hp-bar">
            <span className="player-hp-number">100/100</span>
            <div className="player-hp-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerContainer;
