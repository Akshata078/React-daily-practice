function Hobbies({hobbies}){

    return(
        <>
        <div className="hobby-container">
            {
                hobbies.map((hobby)=>{
                    return(
                        // console.log(item.hobby)
                        <div className="hobby-name">
                            <span>{hobby} </span>
                        <span className="add-hobby-icon">+</span></div>
                    )
                })
            }
        </div>
        
        </>
    )

}
export default Hobbies;