import Evening from "./Evening";

function Afternoon(props){

    // if(props.afternoon){
    //     return(
    //         <div>
    //             <h2>Afternoon Lunch</h2>
    //             <li>Rice</li>
    //             <li>Chapati</li>
    //             <li>Curry</li>
    //             <li>Desert</li>
    //         </div>
    //     )
    // }
    // return(
    //     <Night {...props}/>
    // )





      // According to hours


    // return(
    //     <>
    //     {
    //         props.hours >= 12 && props.hours <= 17 ?  <div>
    //             <h2>Afternoon Lunch</h2>
    //             <li>Rice</li>
    //             <li>Chapati</li>
    //             <li>Curry</li>
    //             <li>Desert</li>
    //             </div>    
    //             : <Evening {...props}/>
    //     }
    //     </>
    // )





    // Dropdown

    return(
        <>
       <div>
                <h2>Afternoon Lunch</h2>
                <li>Rice</li>
                <li>Chapati</li>
                <li>Curry</li>
                <li>Desert</li>
                </div>    
        </>
    )
}
export default Afternoon;