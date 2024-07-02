function Todoitems({value, index, todolist, setTodolist}){
    let dataUpdate = () => {
        // console.log(index);
        let finalData = todolist.filter((v, i)=>
            i!=index
        
        )
        setTodolist(finalData);
    }
    return(
        <>
        <li>{value}<span onClick={dataUpdate}>&times;</span> </li>
        </>
    )

}
export default Todoitems;