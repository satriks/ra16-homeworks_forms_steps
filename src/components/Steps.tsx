import { useState } from "react"
import Step from "./Step"
import { v4 }from 'uuid'


const Steps = () => {

    const [steps , addStep] = useState([{date : "22.22.44", km : "5" }, {date : "21.22.44", km : "7" }])

    return (
        <form className="steps-container">
            <div className="steps-header">
                <label htmlFor="steps-date">
                {"Дата (дд.мм.гг)"}   
                <input type="text" id="steps-date" /> 
                </label>
                
                <label htmlFor="steps-date">
                {"Пройдено км"}    
                <input type="text" id="steps-date" />
                </label>
                <button className="steps-btn">OK</button>
            </div>
            <div className="steps-table-head">
                <span>{"Дата (дд.мм.гг)"}</span>
                <span>{"Пройдено км"}</span>
                <span>{"Действия"}</span>

            </div>
            <div className="step-container">
                <Step key={v4()} data={steps}/>
            </div>
            <div className="steps-place"></div>
        
        </form>
    )
}

export default Steps