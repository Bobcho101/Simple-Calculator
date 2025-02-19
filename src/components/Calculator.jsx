import Button from "./Button";

export default function Calculator(){
    return(
        <>
            <div id="calculator-container">
                <div id="input-output-container">
                    <input type="text" id="input-output-field" readOnly></input>
                </div>
                <div id="buttons-container">
                    <div id="operators-container">
                        <Button value={'C'}/>
                        <Button value={'='}/>
                        <Button value={'+'}/>
                        <Button value={'-'}/>
                        <Button value={'*'}/>
                        <Button value={'/'}/>
                        <Button value={'%'}/>
                    </div>
                    <div id="numbers-container">
                        <Button value={1}/>
                        <Button value={2}/>
                        <Button value={3}/>
                        <Button value={4}/>
                        <Button value={5}/>
                        <Button value={6}/>
                        <Button value={7}/>
                        <Button value={8}/>
                        <Button value={9}/>
                        <Button value={0}/>
                    </div>
                </div>
            </div>
        </>
    )
}