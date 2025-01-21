import Propsdrillingtwo from "./PropsDrillingTwo";
function Propsdrillingone(props){
    return(
        <>
        <h1>Component 1</h1>
        <Propsdrillingtwo {...props}/>
        </>
    )
}

export default Propsdrillingone;