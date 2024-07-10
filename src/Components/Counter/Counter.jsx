import React, { useEffect, useState } from "react";
import "./Counter.css";


// Counter 1

// export default function CounterApp() {
    // const[num,setNum] = useState(0);
    // function increment(){
    //     setNum(num+1);
    // }
    // function decrement(){
    //     setNum(num-1);
    // }
    // function reset(){
    //     setNum(0);
    // }
    // return(
    //     <div className="container">
          
    //          <h1 className="heading">Counter App</h1>
    //          <h2 className="count-value">{num}</h2>
            

    //          <div className="button-container">
    //             <button onClick={()=>decrement()}>Decrement</button>
    //             <button onClick={()=>reset()}>Reset</button>
    //             <button onClick={()=>increment()}>Increment</button>
    //          </div>
            
    //     </div>
    // )

    

    // 2nd way by using only one function

//     const[count,setCount] = useState(0);
   
//     function handleClicked(e){
//         if(e.target.value === "increase"){
//             // console.log(e.target.value);
//             setCount(count+1);
//             // console.log(count);
//         }
//         else{
//             // console.log(e.target.value);
//             setCount(count-1);
//             // console.log(count);
//         }
//     }
//     return(
//         <div className="container">
          
//              <h1 className="heading">Counter App</h1>
//              <h2 className="count-value">{count}</h2>
            

//              <div className="button-container">
//                 <button onClick={handleClicked} value={"decrease"}>Decrement</button>
//                 <button onClick={handleClicked} value={"increase"}>Increment</button>
//              </div>
            
//         </div>
//     )
// }

  




// timer


export default function CounterApp() {
    const[count,setCount] = useState(0);
    const [status, setStatus] = useState(false);
    let timer;

   useEffect(()=>{
    if(status){
        handleStart();
    }

    // clean up function
    return()=>{
        clearInterval(timer)
    }
   }, [count]);


   const handleStart = ()=>{
    timer = setInterval(() => {
        setCount(count+1)
    }, 1000);
    setStatus(true);
   }

   const handleStop = ()=>{
    clearInterval(timer)
    setCount(0);
    setStatus(false);
   }

    return(
        <div className="container">
          
             <h1 className="heading">Counter App</h1>
             <h2 className="count-value">{count}</h2>
            

             <div className="button-container">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
             </div>
            
        </div>
    )

    
}

