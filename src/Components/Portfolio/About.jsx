// import './portfolio.css'
import Projects from './Projects';
import Links from './Links';
import Contact from './Contact';
import Skills from './Skills';

function About(){
    let skills = {
        skill1: "C Programming", 
        skill2 : "HTML",
        skill3 : "CSS",
        skill4 : "JavaScript",
        skill5 : "Problem Solving",
    }
    return (
        <>
        
        <div className='about'>
            <div>
            {/* <img src="https://wallpaperaccess.com/full/3239444.jpg" alt="portfolio image" className='my_img'/> */}
            <p>
            <h2 className='title'>About Me</h2>
                Passionate about coding with expertise in C programming, HTML, CSS and Javascript. Goal driven individual aspiring to excel as a fontend-developer. Eager to contribute innovative solutions to the tech industry.
               
                <Contact email="akshata23@gmail.com" phone="+91 8459866643"/>
                <Skills skills={skills}/>
                <Projects/>
                <Links/>
            </p>
            </div>
        </div>
        </>
    )

}
export default About;