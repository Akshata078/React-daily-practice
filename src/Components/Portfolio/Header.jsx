import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Header(){
    return (
        <div className="portfolio-header">
            {/* <h1 className="heading">My Portfolio</h1> */}
            <img src="https://wallpaperaccess.com/full/3239444.jpg" alt="portfolio image" className="portfolio-img"/>
            <h1>Akshata Khadse</h1>
            <p>FRONT-END WEB DEVELOPER</p>
           <div className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </div>

            <div className="social-icons">
                <div><FaLinkedin /></div>
                <div><FaGithub /></div>
            </div>

        </div>
    )

}
export default Header;