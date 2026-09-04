import { useState, useEffect, useRef } from "react";
import "./App.css";
import bgSound from "./assets/sounds/bg_sound.mp3";
import alarmSound from "./assets/sounds/alarm_sound.mp3";
import cycleIcon from "./assets/images/cycle_icon.png";

import SettingsContainer from "./assets/components/settingsContainer";
import TimerContainer from "./assets/components/timerContainer";
import CycleContainer from "./assets/components/cycleContainer";

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [userCycle, setUserCycle] = useState(5);
  const [userBreak, setUserBreak] = useState(5);
  const [isMuted, setIsMuted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [minute, setMinute] = useState(userCycle);
  const [seconds, setSeconds] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [text, setText] = useState("Foco na Missão!");

  const audioRef = useRef(null);
  const alarmRef = useRef(null);
  useEffect(() => {
    if (alarmRef.current) alarmRef.current.volume = 0.3;
    if (audioRef.current) audioRef.current.volume = 0.1;
  }, []);

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
        playAlarm();
        setIsFocus(false);
        handleBreak();
      } else if (
        minute === 0 &&
        seconds === 0 &&
        !isFocus &&
        currentCycle <= 4
      ) {
        playAlarm();
        handleCycle();
      } else {
        playAlarm();
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
    setMinute(userCycle);
    setSeconds(0);
    setCurrentCycle(1);
    setText("Foco na Missão!");
  };

  const handleVolume = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
  };

  const handleBreak = () => {
    setMinute(userBreak);
    setSeconds(0);
    setText("Descanse, Guerreiro!");
  };

  const handleCycle = () => {
    setIsFocus(true);
    setMinute(userCycle);
    setSeconds(0);
    setText("Foco na Missão!");
    setCurrentCycle((prev) => prev + 1);
  };

  const playAlarm = () => {
    alarmRef.current.play().catch((err) => {
      console.warn("Audio file blocked from browser", err);
    });
  };

  const timer = `${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const addCycle = () => {
    if (userCycle <= 55) {
      setUserCycle((prev) => prev + 5);
    } else {
      setUserCycle(60);
    }
  };
  const rmvCycle = () => {
    if (userCycle >= 10) {
      setUserCycle((prev) => prev - 5);
    } else {
      setUserCycle(5);
    }
  };
  const addBreak = () => {
    if (userBreak <= 10) {
      setUserBreak((prev) => prev + 5);
    } else {
      setUserBreak(15);
    }
  };
  const rmvBreak = () => {
    if (userBreak >= 10) {
      setUserBreak((prev) => prev - 5);
    } else {
      setUserBreak(5);
    }
  };

  const toggleSettings = () => {
    !showSettings ? setShowSettings(true) : setShowSettings(false);
  };

  const saveSettings = () => {
    setMinute(userCycle);
    setShowSettings(false);
    handleReset();
  };

  return (
    <div className="app-container">
      <div className="button-container">
        <i
          className={`volume ${isMuted ? `bi bi-volume-mute-fill` : `bi bi-volume-down-fill`}`}
          onClick={handleVolume}
        ></i>
        <i
          className={`settings ${!showSettings ? "bi bi-gear-fill" : "bi bi-x"} onClick={toggleSettings}`}
          onClick={toggleSettings}
        ></i>
      </div>
      <SettingsContainer
        addCycle={addCycle}
        addBreak={addBreak}
        rmvCycle={rmvCycle}
        rmvBreak={rmvBreak}
        userCycle={userCycle}
        userBreak={userBreak}
        save={saveSettings}
        showSettings={showSettings}
      />
      {isOver ? (
        <button className={`start-button ${!showSettings ? "show-settings" : ""}`} onClick={handleReset}>
          RECOMEÇAR
        </button>
      ) : (
        <button
          className={`start-button ${!showSettings ? "show-settings" : ""}`}
          onClick={handleStart}
        >
          {isActive ? "PAUSAR MISSÃO" : "COMEÇAR MISSÃO"}
        </button>
      )}

      <TimerContainer timer={timer} text={text} />

      <CycleContainer
        currentCycle={currentCycle}
        isOver={isOver}
        cycleIcon={cycleIcon}
      />

      <audio ref={audioRef} src={bgSound}></audio>
      <audio ref={alarmRef} src={alarmSound}></audio>
    </div>
  );
}

export default App;
