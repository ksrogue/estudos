import Button from "./components/button";
import Input from "./components/input";
import { useState } from "react";
import "./app.css";
function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operator, setOperator] = useState("-");
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };
  const handleClearNumber = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };
  const handleOperator = (operator) => {
    setOperator(operator);
    setFirstNumber(currentNumber);
    setCurrentNumber("");
    console.log(operator);
  };
  const handleResult = () => {
    let result;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(currentNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(currentNumber);
        break;
      default:
        result = "0";
        break;
    }
    setCurrentNumber(result);
  };
  return (
    <>
      <div className="calculadora">
        <div className="input-container">
          <Input value={currentNumber} />
        </div>
        <div className="button-container">
          <div className="operator-container">
            <Button number="/" onClick={() => handleOperator("/")} />
            <Button number="*" onClick={() => handleOperator("*")} />
            <Button number="-" onClick={() => handleOperator("-")} />
            <Button number="+" onClick={() => handleOperator("+")} />
          </div>
          <div className="number-container">
            <Button number="7" onClick={() => handleAddNumber("7")} />
            <Button number="8" onClick={() => handleAddNumber("8")} />
            <Button number="9" onClick={() => handleAddNumber("9")} />
            <Button number="4" onClick={() => handleAddNumber("4")} />
            <Button number="5" onClick={() => handleAddNumber("5")} />
            <Button number="6" onClick={() => handleAddNumber("6")} />
            <Button number="1" onClick={() => handleAddNumber("1")} />
            <Button number="2" onClick={() => handleAddNumber("2")} />
            <Button number="3" onClick={() => handleAddNumber("3")} />
          </div>
          <div className="enter-container">
            <Button number="0" onClick={() => handleAddNumber("0")} />
            <Button number="," onClick={() => handleAddNumber(",")}/>
            <Button number="." onClick={() => handleAddNumber(".")}/>
            <Button number="=" onClick={handleResult} />
          </div>
          <div className="clear-container">
            <p>KsCalculator</p>
            <Button number="C" onClick={handleClearNumber} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
