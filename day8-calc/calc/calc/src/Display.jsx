function Display({value, result}){
    return(
        <div className="display">   
            <div className="operate"> {value}</div>
            <div className="result"> {result}</div>
        </div>
    )
}
export default Display;