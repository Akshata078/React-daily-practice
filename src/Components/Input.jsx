import { useState } from "react";

function Input(){
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getValue(event){
        setData(event.target.value);
        setPrint(false);
    }
    return(
        <>
        <h1>Accesing Input Value</h1>
        {
            print ? <h2>{data}</h2> : null
        }
        <input type="text" onChange={getValue} />
        <button onClick={()=>setPrint(true)}>Click</button>
        </>
    )
   

}
export default Input;