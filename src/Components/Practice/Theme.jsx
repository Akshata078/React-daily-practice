import { useEffect, useState } from "react";

function Themechange(){
    let [state, setState]= useState(false)

    useEffect(()=>{
       if (state){
        document.body.style.backgroundColor = "red";
       }
       else{
        document.body.style.backgroundColor = "white";
       }
    },[state]);

    return(
        <>
        <button onClick={()=>setState(!state)}>Change theme</button>
        </>
    )
}
export default Themechange;