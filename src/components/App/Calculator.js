
import { useState, useEffect} from 'react';
import './Calculator.css';
import Button from './Button';
import Input from './Input';
import {evaluate} from 'mathjs' //library thattakes strings and evaluates as math 


function Calculator() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  }

  const resetInput = () => {
    setText("");
    setResult("");

  } 
  

  const calculateResult = () => {
    const input = text.join('');//remove commas
    setResult(evaluate(input));

  }


  


  return (
    
    <div className="App">
      <div className="calc-wrapper">
       <Input text={text} result={result}/>
       <div className="digits">
       <Button symbol={1} handleClick={addToText} />
       <Button symbol={2} handleClick={addToText} />
       <Button symbol={3} handleClick={addToText} />
       <Button symbol={4} handleClick={addToText} />
       <Button symbol={5} handleClick={addToText} />
       <Button symbol={6} handleClick={addToText} />
       <Button symbol={7} handleClick={addToText} />
       <Button symbol={8} handleClick={addToText} />
       <Button symbol={9} handleClick={addToText} />
       <Button symbol={0} handleClick={addToText} />
       </div>

       <div className="operators">
         <Button symbol={"+"} handleClick={addToText} />
         <Button symbol={"-"} handleClick={addToText}  />
         <Button symbol={"*"} handleClick={addToText}  />
         <Button symbol={"/"} handleClick={addToText}  />
         <Button symbol={"="} handleClick={calculateResult}  />
        </div>
        <Button symbol={"clear"}  handleClick={resetInput}/>
        </div>
      

    </div>
  );
}

export default Calculator;
