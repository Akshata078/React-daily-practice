import { useState } from "react";

function Inputcounter(){
    let [count, setCount] = useState(null)

    return(
        <>
        <h1>Counter</h1>
        <h2>Count : {count}</h2>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export default Inputcounter;