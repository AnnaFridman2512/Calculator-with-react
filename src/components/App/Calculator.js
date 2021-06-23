
import { useState } from 'react';
import './Calculator.css';
import Digit from './Digit';
import Screen from './Screen';
import Operator from './Operator';
import Clear from './Clear';

function Calculator() {

  const [sum, setSum] = useState(0);
  
  const addValue = (digitValue) => {
    setSum(sum + digitValue);
  };

  return (
    
    <div className="Calculator">
       <Screen digitValue = {sum}/>
       <div className="digits">
       <Digit digitValue={1} onDigitClick={addValue} />
       <Digit digitValue={2} onDigitClick={addValue} />
       <Digit digitValue={3} onDigitClick={addValue} />
       <Digit digitValue={4} onDigitClick={addValue} />
       <Digit digitValue={5} onDigitClick={addValue} />
       <Digit digitValue={6} onDigitClick={addValue} />
       <Digit digitValue={7} onDigitClick={addValue} />
       <Digit digitValue={8} onDigitClick={addValue} />
       <Digit digitValue={9} onDigitClick={addValue} />
       <Digit digitValue={0} onDigitClick={addValue} />
       </div>

       <div className="operators">
         <Operator operatorValue={"+"} />
         <Operator operatorValue={"-"} />
         <Operator operatorValue={"*"} />
         <Operator operatorValue={"/"} />
         <Operator operatorValue={"="} />
       </div>
      
       <Clear />

    </div>
  );
}

export default Calculator;
