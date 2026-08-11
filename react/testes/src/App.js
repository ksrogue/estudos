import Card from "./components/card";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const handleAddNumber = () => {
    setNumber((prev) => prev + 1);
  };
  const handleSubNumber = () => {
    setNumber((prev) => prev - 1);
    if (number <= 0) {
      setNumber(0);
    }
  };
  return (
    <div className="App">
      <button onClick={handleAddNumber}>+</button>
      <span>{number}</span>
      <button onClick={handleSubNumber}>-</button>
    </div>
  );
};

export default App;
