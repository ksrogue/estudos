import "/src/css/var.css";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import bgSound from "/src/assets/audio/sound_bg.mp3";

function TopContainer({stage, round}) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

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
    ? "bi bi-volume-mute-fill"
    : "bi bi-volume-down-fill";

  return (
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
  );
}

export default TopContainer;
