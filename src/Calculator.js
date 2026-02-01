import React, { useState } from "react";
import "./Calculator.css"; 

const Calculator = () => {
  const [input, setInput] = useState("");                           // Curr input
  const [result, setResult] = useState("");                         // Result

const handleClick = (value) => {
  // Handle different buttons like =, DEL, C, numbers, and operators 
  if (value === "=") {
    try {
      const evalResult = eval(input);                             // calculate the result
      setResult(evalResult);                                      // show result in 2nd row
    } catch (error)   {
      setResult("Error");
    }
  } 
  else if (value === "C") {
    setInput("");
    setResult("");
  } 
  else if (value === "DEL") {
    setInput(input.slice(0, -1));                                // delete the last input character
  } 
  else {
    if (result !== "") {
      setInput(value);                                           // init input with the new value
      setResult("");                                             // clear the old result
    } else {
      setInput(input + value);  
    }
  }
};


  // The calculator's buttons
  const buttons = [
    "C", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={btn === "=" ? "equals" : btn === "C" ? "clear" :  btn === "DEL" ? "del" : ""}                              // Classes for css 
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
