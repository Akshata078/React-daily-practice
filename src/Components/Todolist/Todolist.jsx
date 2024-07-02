import Todoitems from './Todoitems';
import React, { useState } from 'react';
import "./todolist.css"





function TodoList(){
    const [todolist, setTodolist] = useState([]);
    let handleSubmit = (event) =>{
        event.preventDefault();
        let todoname = event.target.todoname.value;
        let finalToDoList = [...todolist,todoname];
        setTodolist(finalToDoList);
        event.target.todoname.value=""
    }

  

    let list = todolist.map((value, index)=>{
        return(
            <Todoitems value={value} key={index} index={index} todolist={todolist} setTodolist={setTodolist}/>
        )

    })
    
    return(
        <>
        <div>
            <h1 className='heading'>ToDo List</h1>
            <form className='to-do-list-form' onSubmit={handleSubmit}>
                <input type="text" name='todoname' />
                <button>Save</button>
            </form>

            <div className='to-do-list'>
                {list}
                
            </div>
        </div>
        </>
    )
  
}

export default TodoList;
