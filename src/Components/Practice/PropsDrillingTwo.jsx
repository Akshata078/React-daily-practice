import Propsdrillingthree from "./PropsDrillingThree";
function Propsdrillingtwo(props){
    return(
        <>
        <h1>Component 2</h1>
        <Propsdrillingthree {...props}/>
        </>
    )
}

export default Propsdrillingtwo;