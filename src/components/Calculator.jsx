import Button from "./Button";

export default function Calculator(){
    return(
        <>
            <div id="calculator-container">
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
                </div>
            </div>
        </>
    )
}