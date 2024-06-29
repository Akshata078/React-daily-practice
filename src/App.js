import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import innerFunc from './Components/Home';
import { useState } from 'react';    // jo bhi hook use karna hota hai, usko hame import bhi karna padta hai
import Counter from "./Components/Counter/Counter";
import Todolist from './Components/Todolist/Todolist';
import Props from './Components/Props';
import Input from './Components/Input';
import Hide from './Components/HideData';
import Profile from './Components/Form';
import Login from './Components/Form';
import Menu from './Components/MenuResponsive/Menu';
import Faq from './Components/FAQ/Faq';
import Userprofile from './Components/Profile';
import Morning from './Components/Food/Morning';
import Portfolio from './Components/Portfolio/Portfolio';


function App() {
  
  // <Home/>

  // // useState hook -->  State ko manipulate, track ya fir koi bhi changes karna hota hai toh vo hum useState hook ki help se karenge.
  // const[Name, setName] = useState("John");   // isme john ye initial name hai, jo bhi initially name ya kuch aur set karna hoga vo hum useState ke andar likhenge
  // function innerFunc(){
  //     return (
  //        setName("Peter")  // jo bhi changes karne honge vo hum setName me karenge, aur jo bhi chnages hum setName me karenge vo automatically name me changes ho jayenge  // hame name chnage karna tha John se Peter toh vo ham setName me likhenge
  //     )
  //  }


  // props 

  

  return (

    <>
   
    {/* <button onClick={()=>innerFunc()}>Click</button> */}

    {/* <h1>{Name}</h1> */}
    {/* <button onClick={()=>innerFunc()}>Click</button> */}




  

  {/* <Home/> */}

  {/* <Props studentName={'Akshata'}/> */}

  {/* <Counter/> */}

  <Todolist/>

  {/* <Menu/> */}

  {/* <Faq/> */}

  {/* <Input/> */}

  {/* <Hide/> */}

  {/* <Profile/> */}


  {/* <Login/> */}

{/* <Userprofile src="react-new/public/image.png" alt="profile img" height="200px" width="200px" border="2px solid black"/> */}

{/* <Morning morning={true} afternoon={true} night={false}/> */}


 {/* <Portfolio/>  */}

    </>
  );
}

export default App;