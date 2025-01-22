function Todolist({task, setTask}){
    // console.log(task);
    

    function deleteItem(index){
        // console.log(index);
        // console.log(setTask);
        let finalData = task.filter((v, i)=>
            i!==index
        
        )
        setTask(finalData);
    }

    function doneTodo(index){
        deleteItem(index)
    }


    return(
        <>
       {
           task && task.map((e, i)=>{
                return(
                    <div  className="todoname">
                        <li>{e}</li>
                        <div className="todo-btn-container">
                            <button onClick={()=>doneTodo(i)} className="done-btn">Done</button>
                            <button onClick={()=>deleteItem(i)} className="delete-btn">Delete</button>
                        </div>
                    </div>
                )
            })
        } 
        </>
    )
}
export default Todolist;