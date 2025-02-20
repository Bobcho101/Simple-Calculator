export default function Button({value, onClick}){
    // const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const operators = ['+', '-', '*', '/', '%', '='];
    // const uniqueOperators = ['C'];
    
    return(
    <>
        <button onClick={() => onClick(value)} className={
            value === 0 ? "calc-button zero-btn" : 
            value === '=' ? "calc-button equal-btn" : 
            value === '⌫' ? "calc-button backspace-btn" : 
            "calc-button"}>{value}
        </button>
    </>
    )
}