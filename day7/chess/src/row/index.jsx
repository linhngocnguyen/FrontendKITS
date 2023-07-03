import "./Row.css";
import Cell from "../cell";

function Row(props) {
  const rows = [];
  for (let i = 0; i < props.size; i++) {
    rows.push(i);
  }

  if (props.row % 2 === 1) {
    return (
      <div className="row">
        {rows.map((row, index) => {
          return (
            <Cell
              key={index}
              cell={row}
              colorOdd={props.colorOdd}
              colorEven={props.colorEven}
              isFlip={props.isFlip} />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="row">
        {rows.map((row, index) => {
          return (
            <Cell
              key={index}
              cell={row + 1}
              colorOdd={props.colorOdd}
              colorEven={props.colorEven}
              isFlip={props.isFlip} />
          );
        })}
      </div>
    );
  }
}


export default Row;
