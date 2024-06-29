import Afternoon from './Afternoon';

function Morning(props){

    if (props.morning){
        return(
            <div>
            <h2>Morning Food</h2>
            <li>Milk</li>
            <li>Tea</li>
            <li>Beakfast</li>

            </div>
        )
    }
    return(
        <Afternoon {...props}/>
    )
   
       

}
export default Morning;