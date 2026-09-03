import { useState, useEffect, useRef } from "react";
import "./App.css";
import bgSound from "./assets/sounds/bg_sound.mp3";
import alarmSound from "./assets/sounds/alarm_sound.mp3";

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [minute, setMinute] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [text, setText] = useState("Foco na Missão!");

  const audioRef = useRef(null);
  const alarmRef = useRef(null);
  if (alarmRef.current) {
    alarmRef.current.volume = 0.3;
  }
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      if (isMuted || !isActive) {
        audioRef.current.pause();
      } else if (isActive && !isMuted) {
        audioRef.current.play().catch((err) => {
          console.warn("O navegador bloqueou o audio", err);
        });
      }
    }
  }, [isActive, isMuted]);

  useEffect(() => {
    if (!isActive) return;

    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minute > 0 && seconds === 0) {
        setMinute((prev) => prev - 1);
        setSeconds(59);
      } else if (minute === 0 && seconds === 0 && isFocus && currentCycle < 4) {
        setIsFocus(false);
        breakCall();
      } else if (
        minute === 0 &&
        seconds === 0 &&
        !isFocus &&
        currentCycle <= 4
      ) {
        cycleCall();
      } else {
        setMinute(0);
        setSeconds(0);
        setText("fim");
        setIsActive(false);
        setIsOver(true);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minute, seconds, isActive, isFocus]);

  const handleStart = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsFocus(true);
    setIsOver(false);
    setMinute(25);
    setSeconds(0);
    setCurrentCycle(1);
    setText("Foco na Missão!");
  };

  const handleVolume = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
  };

  const handleBreak = () => {
    setMinute(5);
    setSeconds(0);
    setText("Descanse, Guerreiro!");
  };

  const breakCall = () => {
    alarmRef.current
      .play()
      .catch((err) => console.warn("Audio file blocked by browser:", err));
    setTimeout(() => {
      handleBreak();
    }, 1500);
  };

  const cycleCall = () => {
    alarmRef.current
      .play()
      .catch((err) => console.warn("Audio file blocked from browser", err));
    setTimeout(() => {
      handleCycle();
    }, 1500);
  };

  const handleCycle = () => {
    setIsFocus(true);
    setMinute(25);
    setSeconds(0);
    setText("Foco na Missão!");
    setCurrentCycle((prev) => prev + 1);
  };

  const timer = `${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="app-container">
      <div className="settings-container">
        <i
          className={
            !isMuted ? "bi bi-volume-down-fill" : "bi bi-volume-mute-fill"
          }
          onClick={handleVolume}
        ></i>
      </div>
      {isOver ? (
        <button className="reset-button" onClick={handleReset}>
          RECOMEÇAR
        </button>
      ) : (
        <button className="start-button" onClick={handleStart}>
          {isActive ? "PAUSAR MISSÃO" : "INICIAR MISSÃO"}
        </button>
      )}
      <div className="timer-container">
        <div className="timer">{timer}</div>
        <span className="timer-text">{text}</span>
      </div>
      <div className="cycles-container">
        <div className="cycle">
          <span
            className={`${currentCycle > 1 ? "completed" : ""} ${currentCycle === 1 ? "current" : ""}`}
          ></span>
        </div>
        <div className="cycle">
          <span
            className={`${currentCycle > 2 ? "completed" : ""} ${currentCycle === 2 ? "current" : ""}`}
          ></span>
        </div>
        <div className="cycle">
          <span
            className={`${currentCycle > 3 ? "completed" : ""} ${currentCycle === 3 ? "current" : ""}`}
          ></span>
        </div>
        <div className="cycle">
          <span
            className={`${isOver ? "completed" : ""} ${currentCycle === 4 ? "current" : ""}`}
          ></span>
        </div>
      </div>
      <audio ref={audioRef} src={bgSound} loop></audio>
      <audio ref={alarmRef} src={alarmSound}></audio>
    </div>
  );
}

export default App;

// todo: adicionar as imagens de fundo, fontes e cores personalizdas.
