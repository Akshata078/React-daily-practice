function Callback2({data, list}){

    console.log("function");

    return(
        <>
        {
            data.map((item)=>{
                return <h3>{item}</h3>
            })
        }

        <button onClick={list}>Add item</button>
        </>
    )
}
export default Callback2;