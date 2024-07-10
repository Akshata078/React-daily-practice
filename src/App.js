import React from 'react';
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
import List from "./Components/List";
import Dropdown from './Components/Food/FoodDropdown';
import Createprofile from './Components/Createprofile/Createprofile';
import { Fetch } from './Components/Fetch/Fetch';
import Useref from './Components/Userref.jsx';
import Usememo from './Components/Usememo.jsx';
import Usecallbackhook from './Components/Usecallbackhook.jsx';
import Modal from './Components/Modal/Modal.jsx';


// routes
import { Routes, Route, Link } from "react-router-dom";

import Homee from './Components/Header/Home.jsx';
import About from './Components/Header/About.jsx';
import Services from './Components/Header/Services.jsx';
import Contact from './Components/Header/Contact.jsx';


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

  // let date = new Date();
  // let hours = date.getHours();
  let hours = 4;

  return (

    <>
   
    {/* <button onClick={()=>innerFunc()}>Click</button> */}

    {/* <h1>{Name}</h1> */}
    {/* <button onClick={()=>innerFunc()}>Click</button> */}
  


  {/* <Home/> */}

  {/* <Props studentName={'Akshata'}/> */}

  {/* <Counter/> */}

  {/* <Todolist/> */}

  {/* <Menu/> */}

  {/* <Faq/> */}

  {/* <Input/> */}

  {/* <Hide/> */}

  {/* <Profile/> */}


  {/* <Login/> */}

{/* <Userprofile src="react-new/public/image.png" alt="profile img" height="200px" width="200px" border="2px solid black"/> */}

 {/* <Morning morning={true} afternoon={false} evening={false} night={false}/>  */}
 {/* <Morning hours={hours}/> */}
 {/* <Dropdown/> */}


 {/* <Portfolio/>  */}

 {/* <List/> */}

 {/* <Createprofile/> */}

 {/* <Fetch/> */}

 {/* <Useref/> */}

{/* <Usememo/> */}

{/* <Usecallbackhook/> */}

<Modal/>



 {/* <Routes>
        <Route path="/" element={<Homee />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>

</Routes> */}

    </>
  );
}

export default App;