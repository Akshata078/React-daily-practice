import React, { useState } from "react";
import Hobbies from "./Hobbies";
import Userprofile from "./Userprofile";

function Form() {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        link: "",
        myHobbies: []
    });

    let hobbies = [
        "Singing",
        "Reading",
        "Playing",
        "Gardening"
    ];

    function handleSubmit(event) {
        event.preventDefault();
        // const { name, value } = event.target;
        // setData(prevData => ({
        //     ...prevData,
            // [name]: value
        // }));
      
    }

    const getValue = (event) => {
        const {name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
      };

    function formSubmit(){
        console.log(data);
    }

    return (
        <div>
            <form className="create-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="fName">First Name:</label> <br />
                <input type="text" id="fName" placeholder="Enter First Name" name="fname" onChange={getValue} /> <br /><br />
                <label htmlFor="lname">Last Name:</label> <br />
                <input type="text" id="lname" placeholder="Enter Last Name" name="lname" onChange={getValue} /> <br /><br />
                <label htmlFor="link">Profile Link:</label> <br />
                <input type="text" id="link" placeholder="Enter Profile Picture Link" name="link" onChange={getValue} /> <br /><br />

                <div className="btn">
                    <button type="submit" className="submit-btn" onClick={formSubmit}>Submit</button>
                </div>
                <br />
            </form>

            <h4 className="add-hobby-title">Add More Hobbies</h4>

            <Hobbies hobbies={hobbies} />

            <Userprofile profileData={data}/>
        </div>
    );
}

export default Form;
