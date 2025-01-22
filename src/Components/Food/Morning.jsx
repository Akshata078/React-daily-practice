import Afternoon from './Afternoon';

function Morning(props){

    // if (props.morning){
    //     return(
    //         <div>
    //         <h2>Morning Food</h2>
    //         <li>Milk</li>
    //         <li>Tea</li>
    //         <li>Beakfast</li>

    //         </div>
    //     )
    // }
    // return(
    //     <Afternoon {...props}/>
    // )




    
    // According to hours

    // return(
    //     <>
    //     {
    //         props.hours >= 4 && props.hours < 12 ?  <div>
    //                <h2>Morning Food</h2>
    //               <li>Milk</li>
    //               <li>Tea</li>
    //               <li>Beakfast</li>
    //               </div>    
    //               : <Afternoon {...props}/>
    //     }
    //     </>
    // )






    // Dropdown 

     return(
        <>
               <div>
                   <h2>Morning Food</h2>
                  <li>Milk</li>
                  <li>Tea</li>
                  <li>Beakfast</li>
                  </div>    
        </>
    )
   
    
}
export default Morning;