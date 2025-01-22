import { useState } from "react";

function Buttonclickpropshow(prop){
    console.log(prop.name);
    let [state, setState] = useState(false)

    return(
        <>
        {
            state ? <h1>{prop.name}</h1> : null
        }
        <button onClick={()=>setState(true)}>Show props</button>
        </>
    )

}
export default Buttonclickpropshow;