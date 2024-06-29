import Night from './Night';

function Afternoon(props){

    if(props.afternoon){
        return(
            <div>
                <h2>Afternoon Lunch</h2>
                <li>Rice</li>
                <li>Chapati</li>
                <li>Curry</li>
                <li>Desert</li>
            </div>
        )
    }
    return(
        <Night {...props}/>
    )
  
}
export default Afternoon;