import { useContext } from "react";
import { contextVar } from "./Usecontexthook";

function Usecontexthooktwo(){
    let data = useContext(contextVar);
    // console.log(data);
    return(
        <>
        <h1>2</h1>
        <h2>{data}</h2>
        </>
    )
}
export default Usecontexthooktwo;