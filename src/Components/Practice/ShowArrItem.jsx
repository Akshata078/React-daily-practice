function Showarritem(){
    let arr = ["Akshata","Shweta","Ishika","Vanshika"]
    return(
        <>
        {
            arr.map((item, index)=>{
                return <h1 key={index}>{item}</h1>
            })
        }
        </>
    )
}

export default Showarritem;