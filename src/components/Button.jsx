export default function Button({value, onClick}){
    // const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const operators = ['+', '-', '*', '/', '%', '='];
    // const uniqueOperators = ['C'];

    return(
    <>
        <button onClick={() => onClick(value)} className="calc-button">{value}</button>
    </>
    )
}