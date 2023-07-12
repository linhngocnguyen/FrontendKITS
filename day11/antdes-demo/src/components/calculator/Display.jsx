import { Space } from "antd";
function Display({value, result}){
    return(
        <div className="display">   
            <Space className="operate"> {value}</Space>
            <Space className="result"> {result}</Space>
        </div>
    )
}
export default Display;