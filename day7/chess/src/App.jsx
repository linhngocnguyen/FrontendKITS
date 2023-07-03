import { useState } from "react";
import "./App.css";
import Board from "./board/";

const App = () => {
  const [size, setSize] = useState(4);
  const [colorOdd, setColorOdd] = useState("#C0C0C0");
  const [colorEven, setColorEven] = useState("#000000");
  const [isFlip, setIsFlip] = useState(false);

  const flip = () => {
    setIsFlip(!isFlip);
    if (isFlip) { 
      setColorEven(colorOdd);
      setColorOdd(colorEven);
    }
  };

  return (
    <>
      <h2>Chessboard</h2>
      <div className="input-row">
        <label>Board size: </label>
        <input
          type="number"
          placeholder="Input size"
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

      <div className="input-row">
        <label>Odd cell: </label>
        <input
          type="color"
          id="head"
          name="head"
          value={colorOdd}
          onChange={(e) => setColorOdd(e.target.value)}
        ></input>
      </div>

      <div className="input-row">
        <label>Even cell: </label>
        <input
          type="color"
          id="head"
          name="head"
          value={colorEven}
          onChange={(e) => setColorEven(e.target.value)}
        ></input>
      </div>

      <div className="board">
        <Board
          size={size}
          colorOdd={colorOdd}
          colorEven={colorEven}
          isFlip={flip}
        />
      </div>
    </>
  );
};

export default App;
