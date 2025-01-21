// useContext - 

import { createContext } from "react";
import Usecontexthooktwo from "./Usecontexthooktwo";

export let contextVar = createContext();
export function Usecontexthook(){
let name = "Akshata";

    return(
        <>
        <h1>1</h1>
        <contextVar.Provider value={name}>
            <Usecontexthooktwo/>
        </contextVar.Provider>
        </>
    )
}
