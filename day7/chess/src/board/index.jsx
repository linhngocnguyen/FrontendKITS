import Row from "../row";

const Board = (props) => {
  const rows = [];
  for (let i = 0; i < props.size; i++) {
    rows.push(i);
  }

  return rows.map((row, index) => {
    return (
      <Row
        key={index}
        row={row}
        size={props.size}
        colorOdd={props.colorOdd}
        colorEven={props.colorEven}
        isFlip={props.isFlip}
      />
    );
  });
};

export default Board;
