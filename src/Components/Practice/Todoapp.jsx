import { useState } from "react";

function Todoapp(){
    let [input, setInput] = useState(null)
    let [todo, setTodo] = useState([]);

    function handleClick(){
       if(input.trim()){
        setTodo([...todo, input]);
        setInput("")
       }
    }
    function handleDelete(index){
        let finalTodo = todo.filter((item,i)=>i !== index)
        setTodo(finalTodo)
    }

    return (
        <>
        <h1>To do list</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
        {
            todo.map((todo, index)=>{
                console.log(todo);
                return <li>{todo}
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
            })
        }
        </>
    )
}
export default Todoapp;