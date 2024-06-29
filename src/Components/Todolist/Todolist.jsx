
import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((todo, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <div>
//         <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter a new task"/>
//         <button onClick={handleAddTodo}>Add</button>
//       </div>
//       <ul>{todos.map((todo, index) => (
//           <li key={index}>{todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


function TodoList(){
  
}

export default TodoList;
