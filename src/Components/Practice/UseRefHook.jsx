
// focus input

import { useEffect, useRef, useState } from "react";



function Userefhook(){
    // let refEle = useRef(null);

    // function handleChange(e){
    //   if(refEle.current){
    //     refEle.current.focus()
    //   }
    // }

    // useEffect(()=>{
    //     refEle.current.focus()
    // })

    let [count, setCount]=useState(0);

    let refEle = useRef(0);

    function handleClick(){
        refEle.current = refEle.current+1
        setCount(refEle.current)
    }

   
    return(
        <>
        {/* <h1>count : {refEle.current}</h1>
        <input ref={refEle} type="text" /> */}
        {/* <button onClick={handleChange}>Click</button> */}

            <h1>Count : {count}</h1>
        <button onClick={handleClick}>Increment</button>

        
        </>
    )
}

export default Userefhook;