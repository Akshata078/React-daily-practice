import Morning from "./Morning";
import Afternoon from "./Afternoon";
import Evening from "./Evening";
import Night from "./Night";
import { useState } from "react";

function Dropdown(){

    let [selectTime, setSelectTime] = useState("");

    function handleChange(event){
        // console.log(event.target.value);
        setSelectTime(event.target.value);
        // console.log(selectTime);
    }
    return(
        <>
       <select onChange={handleChange}>
                <option value={""}>Select</option>
                <option value={"morning"}>Morning</option>
                <option value={"afternoon"}>Afternoon</option>
                <option value={"evening"}>Evening</option>
                <option value={"night"}>Night</option>
        </select>
        {
            selectTime=="morning" ? <Morning/> : selectTime=="afternoon" ? <Afternoon/> : selectTime=="evening" ? <Evening/> : selectTime=="night" ? <Night/> : null
        }
        
    


        </>
    )

}
export default Dropdown;