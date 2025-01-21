import { useEffect, useRef, useState } from "react";

function Usereftwo() {
    const [count, setCount] = useState(0)
    const userefEle = useRef(0);
    //   console.log(userefEle.current);
    //   function increase(){
    //     userefEle.current = userefEle.current+1

    useEffect(() => {
        userefEle.current = userefEle.current + 1;
    })

return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <h3>render count = {userefEle.current}</h3>
    </>
)
}
export default Usereftwo;