function Modalform({status, setStatus}){

    function addTask(){
        setStatus(false);
    }
    return(
        <>
        <div className={status ? 'display-modal' : 'modal'}>
           <input type="text" placeholder="Input Field" className="input-field"/>
            <button onClick={addTask}>Add Task</button>
        </div>
        </>
    )


}
export default Modalform;