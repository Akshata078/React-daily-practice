import { useContext } from "react";
import {contextVar} from "./Usecontextone.jsx"

function Usecontexttwo(){
    const data = useContext(contextVar)
    return(
        <>
        <h1>{data}</h1>
        </>
    )
}
export default Usecontexttwo;