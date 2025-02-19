export default function Button(props){
    // const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const operators = ['+', '-', '*', '/', '%', '='];
    // const uniqueOperators = ['C'];

    return(
    <>
        <button className="calc-button">{props.value}</button>
    </>
    )
}