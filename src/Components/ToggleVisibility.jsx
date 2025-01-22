import { useState } from "react";

function Toggle(){

    const [state, setState] = useState(true);
    return(
        <>
        {
            state ? <h1>Hello</h1> : null
        }
        
        <button onClick={()=>setState(!state)}>Click</button>
        </>
    )
}

export default Toggle;