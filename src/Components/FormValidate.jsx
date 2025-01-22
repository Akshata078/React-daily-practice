import { useState } from "react";

function Formvalidate(){

    let [email, setEmial] = useState("")
    let [phone, setPhone] = useState("")

    function handleSubmit(){
        if(email == ""){
            alert("Enter email")
        }
        else if(phone == ""){
            alert("Enter phone number")
        }

    }
    return(
        <>
        <h1>Form Validation</h1>
        <input type="text" placeholder="enter email" onChange={(e)=>setEmial(e.target.value)}/>
        <input type="text" placeholder="enter phone number" onChange={(e)=>setPhone(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        
        </>
    )
}
export default Formvalidate;