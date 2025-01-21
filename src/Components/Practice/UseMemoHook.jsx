import { useMemo, useState } from "react";

function Usememohook(){

    let [count, setCount] = useState(0)
    function square(v){
        return v*v
    }

    let value = useMemo(()=>{
        return square(count)
    },[count])

    return(
        <>
        <h1>Use memo hook</h1>
        <h3>Count : {count}</h3>
        <h2>Value : {value}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        </>
    )
}

export default Usememohook;