import React from "react";
import { useState } from "react";
import './Login.css'

function Loginpage(){
    let [login, setLogin] = useState(false);
    let [name, setName] = useState("")

    function handleChange(e){
        setName(e.target.value);
    }

    function handleClick(){
        if(name == ""){
            alert("Enter value")
        }
        else{
            setLogin(!login);
            setName("")
        }
    }
    return(
        <>
        {
            login? <h1>Welcome {name}</h1> 
            : null
        }

        <input type="text" onChange={handleChange} className={login ? "active" : "hide"}/>
        <button onClick={handleClick} className={login ? "btn" : "hide"}>
          {
            login ? "Logout" : "Login"
          }
</button> 
      
        </>
    )
}
export default Loginpage;