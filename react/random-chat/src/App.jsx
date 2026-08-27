import "./App.css";
import { useState, useEffect } from "react";
import WizardSprite from "./components/wizardSprite";
import ChatContainer from "./components/chatContainer";

function App() {
  const [canClick, setCanClick] = useState(true);
  const [displayedAdvice, setDisplayedAdvice] = useState("");
  const [advice, setAdvice] = useState("Click on the Wizard for an advice!");

  const getNewAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      const advice = data.slip.advice;
      return advice;
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
    if (canClick) {
      const adviceText = await getNewAdvice();
      setAdvice(adviceText);
      setCanClick(false);
    } else {
      setTimeout(() => {
        setCanClick(true);
      }, 1000);
    }
  };
  return (
    <div className="app-container">
      <div className="container">
        <WizardSprite onclick={adviceHandler} />
        <ChatContainer name="Wizard" advice={displayedAdvice} />
      </div>
    </div>
  );
}

export default App;
