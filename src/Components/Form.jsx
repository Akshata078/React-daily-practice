// Conditional Rendering

import { useState } from "react";



// import { useState } from "react";

// function Profile(){
//     const [loggedIn, setLoggedIn]= useState(false);
//     if(loggedIn){
//         return <h1>Welcome to your profile.</h1>
//     }
//     else{
//         return <h1>Plase login to view your profile</h1>
//     }
// }
// export default Profile;

// In the above case, we are using return keyword again and again, so suppose we have a multiple conditions(like 4 to 5 conditions), at that time we have to use return keyword their aganin and again, because of this, performance will not good. Thats why, we will not use this method.


// import { useState } from "react";

// function Profile(){
//     const [loggedIn, setLoggedIn]= useState(1);
//     return(
//         <>
//         {/* {
//             loggedIn ? <h1>Welcome to your profile.</h1> : <h1>Plase login to view your profile</h1>
//         } */}

//         {/* or */}

//         {
//             loggedIn===0 ? <h1>Welcome user 0</h1> : loggedIn===1 ? <h1>Welcome user 1</h1> : <h1>User not found</h1>
//         }
//          </>

//     ) 

// }
// export default Profile;





// Form Validation

function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleLogin(e){
        e.preventDefault();
        if(name.length<3 || password.length<5){
            alert('user or password not valid');
        }
    }

    function userHandler(e){
        let item = e.target.value;
        if(item.length < 3){
            setUserError(true);
        }
        else{
            setUserError(false);
        }
        setName(item);
    }

    function passwordHandler(e){
        let item = e.target.value;
        if(item.length < 5){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }
        setPassword(item);

    }
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" onChange={userHandler} />
            {
                userError ? <span>User Not valid</span> : null
            } 
            <br /><br />
            <input type="text" onChange={passwordHandler}/>
            {
                passwordError ? <span>Password Not valid</span> : null
            } 
            <br /> <br />
            <button type="submit">Login</button>

        </form>

        
        </>
    )

}
export default Login;