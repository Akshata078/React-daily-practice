function Contact({email, phone}){
    return(
        <>
        <div className="links">
            <h2 className="title">Contact</h2>
            <li>Mobile No. - {phone}</li>
            <li>Email Adress - {email}</li>
        </div>
        </>
    )

}
export default Contact;