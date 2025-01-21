import { useState, useEffect, useRef } from "react";
// import Todolist from "./Todolist";
import Todolist from './Todolist.jsx';

function Modalform({status, setStatus}){

    const [input, setInput] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

    // let inputVal;
    function handleInput(e){
        setInputVal(e.target.value);
        // console.log(inputVal);
    }
    function addTask(){
        if (inputVal.trim() !== '') { // Check if inputVal is not empty
            setInput([...input, inputVal]); // Add inputVal to tasks array
            setInputVal(''); // Clear input field
        } else {
            alert("Please enter a todo first");
        }
    }

    return(
        <>

        <div className="modal-container">
        <div className={status ? 'display-modal' : 'modal'}>
           <div className="task-header">
            <h2>Add Task</h2>
            <h3 className="cross-icon" onClick={()=>setStatus(false)}>&#9932;</h3>
           </div>
           <div>
           <input type="text" placeholder="Input Field" ref={inputRef} className="input-field" value={inputVal} onChange={handleInput}/>
           </div>
           <div className="btn-container">
           <button onClick={addTask}>Add Task</button>
           </div>
        </div>
        </div>
        {/* {
            input.map((e)=>{
                return(
                    <li className="list">{e}</li>
                )
            })
        } */}
        <div className="list">
        {/* {
            input.map((e)=>{
                return(
                    <li className="todoname">{e}</li>
                )
            })
        } */}
        <Todolist task={input} setTask={setInput}/>
        </div>
        </>
    )


}
export default Modalform;