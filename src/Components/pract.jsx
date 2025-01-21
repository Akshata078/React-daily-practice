import { useState } from "react";

function Inputf(){
    let [state, setState] = useState("");
    let [data, setData] = useState(false);
    function handleChange(e){
        let val = e.target.value;
        setState(val)
        setData(false)
      
    }
   

    return(
        <>
        <input type="text" onChange={handleChange}/>
        <button onClick={()=>setData(true)}>Click</button>
        {
            data ?  <h1>{state}</h1> : null
        }
       
        </>
    )
}
export default Inputf;