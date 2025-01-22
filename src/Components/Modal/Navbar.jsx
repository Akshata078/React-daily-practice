import { useState } from "react";
import Modalform from './Modalform';
import Aside from "./Aside";
import Todolist from "./Todolist";

function Navbar (){

    const [status, setStatus] = useState(false);

    function formclicked(){
        setStatus(true);
    }
    return(
        <>
        <nav>
            <div>
            <button onClick={formclicked}>Modal</button>
            
            </div>
           
        </nav>
        <Modalform status={status} setStatus={setStatus}/>
        <div>
        <Aside/>
        <Todolist/>
        </div>
        </>

    )
}
export default Navbar;