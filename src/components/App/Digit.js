export default function Digit({digitValue, onDigitClick}){
    return (
       <button onClick={() => onDigitClick(digitValue)}>{digitValue}</button>
    );
}