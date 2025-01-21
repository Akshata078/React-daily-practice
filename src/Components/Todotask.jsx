import { useState } from "react";

function Tododtask(){

    let [todo, setTodo] = useState([])
    let [input, setInput] = useState(null);
    let [status, setStatus] = useState(false);

    function handleAdd(){
        if(input.trim()){
            setStatus(true)
            setTodo([...todo, input]);
            setInput("")
        }
    }

    return(
        <>
        <h1>To Do</h1>

        <input type="text" placeholder="Add New task" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleAdd}>Add Task</button>
        <button onClick={()=>setStatus(true)}>All</button>
        <button onClick={()=>setStatus(true)} > Active</button>
        <button onClick={()=>setStatus(false)}>Completed</button>

        {
            status ? 
            todo.map((item)=>{
                return <li>{item}</li>
            })
            :
            null

        }
        </>
    )
}

export default Tododtask;