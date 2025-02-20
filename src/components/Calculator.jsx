import { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";

export default function Calculator(){
    const [inputVal, setInputVal] = useState('');
    function handleButtonClick(value){
        if(value === 'C'){
            setInputVal(inputVal => inputVal = '');
        } else if(value === '='){
            
            try {
                setInputVal(evaluate(inputVal).toString());
            } catch (error) {
                setInputVal('Error');
            }
        } else if (value === "⌫"){
            setInputVal(inputVal => inputVal.slice(0, -1))
        } else{
            if(inputVal === 'Error'){
                setInputVal(inputVal => inputVal = '')
            }
            setInputVal(inputVal => inputVal += value)
        }
    }

    return(
        <>
            <div id="calculator-container">
                <div id="input-output-container">
                    <input type="text" value={inputVal} id="input-output-field" readOnly placeholder="0"></input>
                </div>
                <div id="buttons-container">
                    <div id="operators-container">
                        <Button onClick={handleButtonClick} value={'C'}/>
                        <Button onClick={handleButtonClick} value={'⌫'}/>
                        <Button onClick={handleButtonClick} value={'+'}/>
                        <Button onClick={handleButtonClick} value={'-'}/>
                        <Button onClick={handleButtonClick} value={'*'}/>
                        <Button onClick={handleButtonClick} value={'/'}/>
                        <Button onClick={handleButtonClick} value={'%'}/>
                        <Button onClick={handleButtonClick} value={'.'}/>
                        <Button onClick={handleButtonClick} value={'='}/>
                    </div>
                    <div id="numbers-container">
                        <Button onClick={handleButtonClick} value={1}/>
                        <Button onClick={handleButtonClick} value={2}/>
                        <Button onClick={handleButtonClick} value={3}/>
                        <Button onClick={handleButtonClick} value={4}/>
                        <Button onClick={handleButtonClick} value={5}/>
                        <Button onClick={handleButtonClick} value={6}/>
                        <Button onClick={handleButtonClick} value={7}/>
                        <Button onClick={handleButtonClick} value={8}/>
                        <Button onClick={handleButtonClick} value={9}/>
                        <Button onClick={handleButtonClick} value={0}/>
                    </div>
                </div>
            </div>
        </>
    )
}