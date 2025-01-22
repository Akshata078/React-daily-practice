import React from "react";
import Userbio from "./Userbio";

function Userprofile({profileData}) {
    // console.log(profileData);

    // img link - https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg
    
    return (
        <>
            <div className="user-profile-section1">
                <div>
                    <p>First Name: {profileData.fname}</p>
                    <p>Last Name: {profileData.lname}</p>
                </div>

                <div>
                    <img src={profileData.link} alt="Profile" className="profile-img"/>
                </div>
            </div>

            <Userbio/>

            <h3 className="add-hobby-title">My Hobbies</h3>
            <li>Drawing</li>
            

        </>
    );
}

export default Userprofile;
