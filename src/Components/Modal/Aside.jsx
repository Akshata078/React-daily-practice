import { useEffect, useState } from "react";

function Aside(){

    const [time, setTime] = useState(new Date());
   
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);

    }, [])


    function getTime(time){
        let hours = time.getHours();
        // console.log(hours);
        let minutes = time.getMinutes();
        // console.log(minutes);
        let seconds = time.getSeconds();
        // console.log(seconds);
        return `${hours} : ${minutes} : ${seconds}`
    }

    return(
        <>
        <div className="aside-section"> 

        <div className="all-tasks">
            <button>All Tasks</button>
        </div>
        <div className="upcoming-tasks">
            <button>Upcoming Tasks</button>
        </div>
        <div className="in-progress">
            <button>In progress</button>
        </div>
        <div className="completed-tasks">
            <button>Completed Tasks</button>
        </div>
       
        <div className="clock">
            <h4>Digital Clock</h4>
            <h5>{getTime(time)}</h5>
        </div>

        </div>
        
        </>
    )

}
export default Aside;