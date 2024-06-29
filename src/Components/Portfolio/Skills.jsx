function Skills({skills}){
return(
    <>
    <div className="links">
        <h2 className="title">My Skills</h2>
        <li>{skills.skill1}</li>
        <li>{skills.skill2}</li>
        <li>{skills.skill3}</li>
        <li>{skills.skill4}</li>
        <li>{skills.skill5}</li>
    </div>
    </>
)
}
export default Skills;