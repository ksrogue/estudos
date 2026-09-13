import { useState, useEffect, useRef } from "react";
import "./App.css";

import DavidSprite from "./assets/imgs/david_sprite.png";

import Video from "./assets/video/video.mp4";
import ChatSound from "./assets/sounds/chat.wav";
import ChatConfirm from "./assets/sounds/chat.mp3";
import Music from "./assets/sounds/music.mp3";

function App() {
  const fullText = [
    "Feliz aniversário, meu amor!",
    "Hoje o dia é todinho seu, mas o maior presente quem ganha todos os dias sou eu, por ter você na minha vida.",
    "Obrigado por ser minha companheira, minha amiga e a minha duo.",
    "Que o seu novo ano seja repleto de felicidade, conquistas e muita saúde.",
    "Te amo muito!",
  ];

  const [hasStarted, setHasStarted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [button, setButton] = useState("");
  const [controler, setControler] = useState({
    showBox: false,
    showVideo: false,
  });

  const chatRef = useRef(null);
  const confirmRef = useRef(null);
  const musicRef = useRef(null);
  const videoRef = useRef(null);

  const currentText = fullText[textIndex];

  useEffect(() => {
    if (!hasStarted) return;
    setDisplayedText("");
    setCurrentIndex(0);
    setButton("");
  }, [textIndex, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < currentText.length) {
      const timeOut = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        playAudio(chatRef);
      }, 60);

      return () => clearTimeout(timeOut);
    } else {
      setButton("show");
    }
  }, [currentIndex, currentText, hasStarted]);

  const start = () => {
    if (musicRef.current) musicRef.current.volume = 0.05;
    if (chatRef.current) chatRef.current.volume = 0.2;
    if (confirmRef.current) {
      confirmRef.current.volume = 1;
      playAudio(confirmRef);
    }

    setTimeout(() => {
      playAudio(musicRef);
      setHasStarted(true);
      setControler((prev) => ({ ...prev, showBox: true }));
    }, 200);
  };

  const nextText = () => {
    playAudio(confirmRef);
    setTimeout(() => {
      if (currentIndex < currentText.length) {
        setDisplayedText(currentText);
        setCurrentIndex(currentText.length);
        return;
      }

      if (textIndex < fullText.length - 1) {
        setTextIndex((prev) => prev + 1);
      } else {
        displayVideo();
      }
    }, 200);
  };

  const displayVideo = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
      musicRef.current.volume = 0.01;
    }
    setControler((prev) => ({ ...prev, showBox: false, showVideo: true }));

    setTimeout(() => {
      videoRef.current.play().catch((err) => {
        console.error("Houve um problema reproduzindo o vídeo:", err);
      });
    }, 200);
  };

  const playAudio = (audio) => {
    if (!audio.current) return;
    audio.current.currentTime = 0;
    audio.current.play().catch((err) => {
      console.error("Houve um erro com a reprodução do áudio:", err);
    });
  };

  return (
    <div className="app-container">
      <button
        className={`start-button ${hasStarted ? "hidden" : "show"}`}
        onClick={start}
      >
        START
      </button>

      <div className={`canvas ${controler.showBox ? "show" : "hidden"}`}>
        <div className="chat-container">
          <div className="sprite-container">
            <img src={DavidSprite} alt="foto pixelada do personagem" />
          </div>
          <div className="chat-name">David W</div>
          <div className="text-box">
            <div className="text">{displayedText}</div>
            <i
              className={`bi bi-caret-down-fill confirm ${button}`}
              onClick={nextText}
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`video-container ${controler.showVideo ? "show" : "hidden"}`}
      >
        <video src={Video} ref={videoRef}></video>
      </div>

      <audio src={ChatSound} ref={chatRef}></audio>
      <audio src={ChatConfirm} ref={confirmRef}></audio>
      <audio src={Music} ref={musicRef} loop></audio>
    </div>
  );
}

export default App;
