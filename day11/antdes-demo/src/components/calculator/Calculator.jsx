import './App.css'
import Button from './Button';
import Display from './Display'
import { useState } from 'react'
let operands = [];
let curOperator = null; 
function Calculator() {
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("");

  function handleButtonClick(val){
    if (value!="0") {
      setValue(`${value}${val}`);
    }
    else{
      setValue(`${val}`);
    }
  }

  function handleSign(){
    let newVal=(+value)*-1;
    setValue(newVal)
  }

  function handleClearAll(){
    setValue("0");
    setResult("");
    curOperator=null;
    operands=[];
  }

  function handleClearOne(){
    setValue(`${value}`.slice(0, -1));
  }
  function handleClearInput(){
    setValue("");
  }

  function evaluate(operands, operator) {
    switch(operator) {
      case '+':
        return operands[0] + operands[1];
      case '-':
        return operands[0] - operands[1];
      case '*':
        return operands[0] * operands[1];
      case '/':
        return operands[0] / operands[1];
    }
  }

  function handleOperator(operator){
    operands = [];
    if(operands.length<1){
      curOperator=operator;
      operands.push(+value);
      setValue("");
      setResult(`${value}${operator}`);
    }
    else if (operands.length < 2) {
      operands.push(+value);
      let result = evaluate(operands, curOperator);
      operands = [];
      operands.push(+result);
      curOperator = operator;
      setValue("");
      setResult(`${result}${operator}`);
    } else {
      curOperator = operator;
      setResult(`${operands[0]}${operator}`);
    }
  }

  function handleEqual(){
    operands.push(+value);
    let result = evaluate(operands, curOperator);
    if(result===undefined){
      setResult(`${value}`);
    }
    else{
      operands = [];
      operands.push(+result);
      setValue(`${result}`);
      setResult("");
    }
  }
  
  const buttons =[
    {value: "AC", onClick: ()=>handleClearAll()},
    {value: "C", onClick: ()=>handleClearInput()},
    {value: "Back", label:"\u2190", onClick: ()=>handleClearOne()},
    {value: "/", onClick: ()=>handleOperator("/")},
    {value: 7, onClick: ()=>handleButtonClick(7)},
    {value: 8, onClick: ()=>handleButtonClick(8)},
    {value: 9, onClick: ()=>handleButtonClick(9)},
    {value: "*", onClick: ()=>handleOperator("*")},
    {value: 4, onClick: ()=>handleButtonClick(4)},
    {value: 5, onClick: ()=>handleButtonClick(5)},
    {value: 6, onClick: ()=>handleButtonClick(6)},
    {value: "-", onClick: ()=>handleOperator("-")},
    {value: 1, onClick: ()=>handleButtonClick(1)},
    {value: 2, onClick: ()=>handleButtonClick(2)},
    {value: 3, onClick: ()=>handleButtonClick(3)},
    {value: "+", onClick: ()=>handleOperator("+")},
    {value: 0, onClick: ()=>handleButtonClick(0)},
    {value: "+/-", onClick: ()=>handleSign()},
    {value: ".", onClick: ()=>handleButtonClick(".")},
    {value: "=", onClick: ()=>handleEqual()},
  ]

  return (
    <div className='calculator'>
      <Display value={value} result={result} />
      <div className='content'>{
        buttons.map(
            (b, idx) => <Button 
              key={idx} 
              value={b.value} 
              label={b.label}
              onClick={b.onClick}
              />
          )
        }</div>
    </div>
  )
}

export default Calculator;