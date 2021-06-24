import './Input.css';
export default function Input({text, result}){

    return (
        <div className="input-wrapper">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">{text}</div>
        </div>

    );

}