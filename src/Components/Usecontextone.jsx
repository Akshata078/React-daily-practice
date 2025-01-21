import { useContext, createContext } from "react";
import Usecontexttwo from "./Usecontexttwo";


export let contextVar = createContext();

export function Usecontextone(){

    let data = "Akshata";
    return(
        <>
        <h1>hello</h1>
        <contextVar.Provider value={data}>
            <Usecontexttwo/>
        </contextVar.Provider>
        </>
    )
}
