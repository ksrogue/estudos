import "./App.css";
import { useState, useEffect } from "react";
import WizardSprite from "./components/wizardSprite";
import ChatContainer from "./components/chatContainer";

function App() {
  const [lang, setLang] = useState("br");
  const [displayedAdvice, setDisplayedAdvice] = useState(
    lang === "br"
      ? "Clique no Mago para um conselho!"
      : "Click on the Wizard for an advice!",
  );
  const [advice, setAdvice] = useState("");
  const [wizardName, setWizardName] = useState(
    lang === "br" ? "Mago" : "Wizard",
  );

  const langHandler = () => {
    lang === "br" ? setLang("us") : setLang("br");
  };

  const getNewAdvice = async () => {
    try {
      const enResponse = await fetch("https://api.adviceslip.com/advice");
      if (!enResponse.ok) {
        throw new Error(`Erro na requisição: ${enResponse.status}`);
      }
      const enData = await enResponse.json();
      const enAdvice = enData.slip.advice;
      if (lang === "br") {
        const ptResponse = await fetch(
          `https://api.mymemory.translated.net/get?q=${enAdvice}&langpair=en|pt`,
        );
        const ptData = await ptResponse.json();
        const ptAdvice = ptData.responseData.translatedText;

        return ptAdvice || enAdvice;
      } else return enAdvice;
    } catch (err) {
      console.error("Houve um problema: " + err);
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
    const adviceText = await getNewAdvice();
    setAdvice(adviceText);
  };
  return (
    <div className="app-container">
      <div className="lang-container">
        <span className={`fi fi-${lang}`} onClick={langHandler}></span>
      </div>
      <div className="container">
        <WizardSprite onclick={adviceHandler} />
        <ChatContainer name={wizardName} advice={displayedAdvice} />
      </div>
    </div>
  );
}

export default App;
