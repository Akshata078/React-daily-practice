import { useState } from "react";
import Modalform from './Modalform';

function Navbar (){

    const [status, setStatus] = useState(false);

    function formclicked(){
        setStatus(true);
    }
    return(
        <>
        <nav>
            <div>
            <button onClick={formclicked}>Form</button>
            
            </div>
           
        </nav>
        <Modalform status={status} setStatus={setStatus}/>
        </>

    )
}
export default Navbar;