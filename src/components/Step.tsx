interface StepType {
        date: string,
        km : string
}

interface Props {
    data : StepType[]
}



const Step = ({data} : Props ) => {

    return data.map( (el : StepType) => {
        return (
            
        <div className="step">
            <span className="step-date">{el.date}</span>
            <span className="step-dist">{el.km}</span>
            <span className="step-actions">{"test"}</span>
       </div>
        )
        })
    }
       
    




export default Step