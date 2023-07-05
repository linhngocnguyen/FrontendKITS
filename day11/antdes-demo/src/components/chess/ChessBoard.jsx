import { useState } from 'react';
import { Button, InputNumber, ColorPicker, Space, message } from 'antd';
import './ChessBoard.css';
import Board from './board';

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function ChessBoard() {
  const [size, setSize] = useState(null);
  const [colorOdd, setColorOdd] = useState('#C0C0C0');
  const [colorEven, setColorEven] = useState('#000000');
  const [isFlip, setIsFlip] = useState(false);

  const handleOddColorChange = (color) => {
    setColorOdd(hexToRgb(color));
  };

  const handleEvenColorChange = (color) => {
    setColorEven(hexToRgb(color));
  };

  const handleCreateBoard = () => {
    if (size && size >= 1 && size <= 19) {
      message.success(`Created a ${size}x${size} chessboard!`);
    } else {
      message.error('Please enter a valid board size (1-19).');
    }
  };

  const handleCellClick = () => {
    setIsFlip(!isFlip);
  };

  const getCellColor = (row, col) => {
    if (isFlip) {
      return (row + col) % 2 === 0 ? colorOdd : colorEven;
    } else {
      return (row + col) % 2 === 0 ? colorEven : colorOdd;
    }
  };

  return (
    <>
      <h2>Chessboard</h2>
      <div className="input-row">
        <label>Board size:</label>
        <InputNumber
          min={1}
          max={19}
          defaultValue={null}
          value={size}
          onChange={setSize}
        />
        <Button type="primary" onClick={handleCreateBoard}>
          Create
        </Button>
      </div>

      <Space className="input-row" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <label>Odd cell:</label>
        <ColorPicker color={colorOdd} onChange={handleOddColorChange} />
      </Space>

      <Space className="input-row" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <label>Even cell:</label>
        <ColorPicker color={colorEven} onChange={handleEvenColorChange} />
      </Space>

      <div className="board">
        <Board size={size} getCellColor={getCellColor} onCellClick={handleCellClick} />
      </div>

      <div className="input-row">
        <Button onClick={() => setIsFlip(!isFlip)}>Flip board</Button>
      </div>
    </>
  );
}

export default ChessBoard;