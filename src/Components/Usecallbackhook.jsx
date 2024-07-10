import { useCallback, useState } from "react";
import Callback2 from './Callback2';


function Usecallback(){
    
    const [add, setAdd] = useState(0);
    const [data, setData] = useState([]);

    const addList = useCallback(() => {
        setData((prev)=>[...prev, "new list"])
    }, [data]);


    return(
        <>
        <h1>Callback hook</h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        {/* <button onClick={()=>addList()}>Add list </button>   */}
        <h1>Addition : {add}</h1>      
        <Callback2 list={addList} data={data}/>
        </>
    )

}
export default Usecallback;