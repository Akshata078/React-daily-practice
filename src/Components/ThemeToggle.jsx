import { useState, useEffect } from "react";
import './Themetoggle.css'

function Themetoggle(){
    let [theme, setTheme] = useState(false);
    let [color, setColor] = useState(false)

    useEffect(()=>{
        if(theme){
            document.body.style.backgroundColor = "gray";
        }
        else{
            document.body.style.backgroundColor = "white";
        }
    }, [theme]);



    return(
        <>
        <h1 className={color ? "red":  "black"}>Hello</h1>
        <button onClick={()=>setColor(!color)}>Change color</button>
        <button onClick={()=>setTheme(!theme)}>Change Theme</button>
        </>
    )
}

export default Themetoggle;