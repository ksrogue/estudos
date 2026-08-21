import "/src/css/var.css";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import bgSound from "/src/assets/audio/sound_bg.mp3";
import rockIcon from "/src/assets/img/actionbar/rock-icon.png";
import paperIcon from "/src/assets/img/actionbar/paper-icon.png";
import scissorsIcon from "/src/assets/img/actionbar/scissors-icon.png";
import diceIcon from "/src/assets/img/actionbar/dice-icon.png";

const ICON_MAP = {
  dice: diceIcon,
  rock: rockIcon,
  paper: paperIcon,
  scissors: scissorsIcon,
};

function TopContainer({ stage, round, pIcon, eIcon, result }) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  const playerIcon = ICON_MAP[pIcon] || ICON_MAP.dice;
  const enemyIcon = ICON_MAP[eIcon] || ICON_MAP.dice;
  const toggleAudio = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.warn("audio autoplay blocked from browser:", err);
        });
      }
    }
  }, [isMuted]);

  const audioIcon = isMuted
    ? "bi bi-volume-down-fill"
    : "bi bi-volume-muted-fill";

  return (
    <div className="container">
      <div className="top-container">
        <div className="stage-container">
          STAGE
          <span>{stage || "1"}/5</span>
        </div>
        <div className="round-container">
          ROUND
          <span>{round || "1"}</span>
        </div>
        <button className="mute-btn" onClick={toggleAudio}>
          <i className={audioIcon}></i>
        </button>

        <audio ref={audioRef} src={bgSound} loop></audio>
      </div>
      <div className="status-container">
        <div className="player-move">
          <span>YOU</span>
          <div className="img-container">
            <img src={playerIcon} alt="player move icon" />
          </div>
        </div>
        <div className="result">{result || "RESULT"}</div>
        <div className="enemy-move">
          <span>ENEMY</span>
          <div className="img-container">
            <img src={enemyIcon} alt="enemy move icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
