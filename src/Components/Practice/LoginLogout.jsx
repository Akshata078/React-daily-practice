import { useState } from "react";

function Loginlogout(){
    let [login, setLogin] = useState(false);
    return(
        <>
        {
            login ? <h1>Login Page</h1> : null
        }
        <button onClick={()=>setLogin(!login)}>
            {login ? "Logout" : "Login"}
        </button>
        </>
    )
}
export default Loginlogout;