import { useCallback, useState } from "react";

function Usecallbackhooktwo(){
    let [state, setState] = useState(0)

    function square(v){
        return v*v
    }

    let func = useCallback(()=>{
        return square(state)
    }, [state])

    return(
        <>
        <h1>useCallback hook</h1>
        <h2>{func()}</h2>
        <button onClick={()=>setState(state+1)}>Click</button>
        </>
    )
}
export default Usecallbackhooktwo;