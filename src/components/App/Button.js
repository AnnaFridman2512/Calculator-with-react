export default function Button({symbol, handleClick}){
    return (
       <button onClick={() => handleClick(symbol)}>{symbol}</button>
    );
}