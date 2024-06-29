import React, { useState } from "react";
import css from "./Counter.css";

export default function CounterApp() {
    const[num,setNum] = useState(0);
    function increment(){
        setNum(num+1);
    }
    function decrement(){
        setNum(num-1);
    }
    function reset(){
        setNum(0);
    }
    return(
        <div className="container">
          
             <h1 className="heading">Counter App</h1>
             <h2 className="count-value">{num}</h2>
            

             <div className="button-container">
                <button onClick={()=>decrement()}>Decrement</button>
                <button onClick={()=>reset()}>Reset</button>
                <button onClick={()=>increment()}>Increment</button>
             </div>
            
        </div>
    )

    
}
