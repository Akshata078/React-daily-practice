import { useState } from "react";
import './Menu.css';


function Menu(){
    const [menuStatus, setMenuStatus] = useState(false);

    return(
        <div>
          <button className="icon"  onClick={()=>setMenuStatus(!menuStatus)}>
          {
               menuStatus ?  <span>&times;</span> :   <span>&#9776;</span>
          }
          </button>
            <ul className={menuStatus ? 'active-menu' : ''}>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>

            
        </div>
    )

}

export default Menu;