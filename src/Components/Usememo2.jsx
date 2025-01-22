import { useCallback, useMemo, useState } from "react";

function Usememo2(){
    let [count, setCount] = useState(0);
    // let [state, setState] = useState(5)

    function Square(v){
        return v*v;
    }

    let memo = useMemo(()=>{
        return Square(count);
    }, [count])
    return(
        <>
        <h1>useMemo</h1>
        {/* <h6>state = {state}</h6> */}
        <h2>Count : {count}</h2>
        <h3>square : {memo}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export default Usememo2;