import "./App.css";
import { useState, useEffect, useRef } from "react";
import WizardSprite from "./components/wizardSprite";
import ChatContainer from "./components/chatContainer";
import wizardSpriteImg from "/src/assets/images/wizard_sprite.png";
import wizardConjuringSprite from "/src/assets/images/wizard_conjuring_sprite.png";
import castingSound from "/src/assets/sounds/casting_sound.mp3";

function App() {
  const [canClick, setCanClick] = useState(true);
  const [lang, setLang] = useState("us");
  const [name, setName] = useState(lang === "us" ? "Wizard" : "Mago");
  const [displayedAdvice, setDisplayedAdvice] = useState("");
  const [advice, setAdvice] = useState(
    lang === "us"
      ? "Click on the Wizard for an advice!"
      : "Clique no Mago para um conselho!",
  );
  const [wizardSprite, setWizardSprite] = useState(wizardSpriteImg);
  const [isConjuring, setIsConjuring] = useState("");
  const audioRef = useRef(null);

  const getNewAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      const advice = data.slip.advice;
      if (lang === "br") {
        const translatedAdvice = await translateAdvice(advice);

        return translatedAdvice || advice;
      } else return advice;
    } catch (err) {
      console.error("Houve um problema: " + err);
    }
  };

  const translateAdvice = async (advice) => {
    try {
      const ptResponse = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURI(advice)}&langpair=en|pt`,
      );
      if (!ptResponse.ok) {
        throw new Error(`Erro na requisição: ${ptResponse.status}`);
      }
      const ptData = await ptResponse.json();
      const ptAdvice = ptData.responseData.translatedText;
      return ptAdvice;
    } catch (err) {
      console.error("Houve um problema: " + err);
      return advice;
    }
  };

  useEffect(() => {
    if (!advice) return;

    setDisplayedAdvice(advice.charAt(0));
    let index = 0;

    const timer = setInterval(() => {
      if (index < advice.length) {
        setDisplayedAdvice((prev) => prev + advice.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [advice]);

  const adviceHandler = async () => {
    if (!canClick) return;

    setCanClick(false);
    setWizardSprite(wizardConjuringSprite);
    setIsConjuring("conjuring");
    audioRef.current.volume = 0.3;
    audioRef.current.play();
    const adviceText = await getNewAdvice();

    if (adviceText) {
      setAdvice(adviceText);
    }

    setTimeout(() => {
      setCanClick(true);
      setWizardSprite(wizardSpriteImg);
      setIsConjuring("");
    }, 1500);
  };

  const langHandler = () => {
    const nextLang = lang === "us" ? "br" : "us";
    setLang(nextLang);
    setName(nextLang === "us" ? "Wizard" : "Mago");

    const defaultText =
      nextLang === "us"
        ? "Click on the Wizard for an advice!"
        : "Clique no Mago para um conselho!";

    setAdvice(defaultText);
  };
  return (
    <div className="app-container">
      <section className="lang-container">
        <button className={`fi fi-${lang}`} onClick={langHandler}></button>
      </section>
      <div className="container">
        <WizardSprite
          onClick={adviceHandler}
          sprite={wizardSprite}
          isConjuring={isConjuring}
        />
        <ChatContainer name={name} advice={displayedAdvice} />
      </div>

      <audio ref={audioRef} src={castingSound}></audio>
    </div>
  );
}

export default App;
