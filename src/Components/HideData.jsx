import { useState } from "react";

function Hide(){
    const [show, setShow] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false);

    // return(
    //     <>
       
    //     {
    //         show ?  <h1>I am visible</h1> : null
    //     }
    //     {/* <button onClick={()=>setShow(true)}>Show</button> */}
    //     {/* <button onClick={()=>setShow(false)}>Hide</button> */}

    //     <button onClick={()=>setShow(!show)}>Toggle</button>
    //     </>
    // )



    //OR


    return(
        // <div>
        //     <button onClick={()=>setShow(!show)}>
        //         {(show) ? 'Hide' : 'Show'}
        //     </button>
        //     {
        //         (show) ? <h1>I am visible</h1> : ''
        //     }
        // </div>





        // show or hide password

        <div>
            <input type={showPassword ? 'text' : 'password'} />
            <button onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? 'Hide' : 'Show'
            }
            </button>
        </div>
    )



}
export default Hide;