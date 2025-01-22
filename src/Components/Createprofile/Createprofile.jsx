import './Createprofile.css';
import Form from './Form';
import Userprofile from './Userprofile';


function Createprofile(){
    return(
        <div className='create-profile'>
        <div className='form-component'>
            <Form/>
        </div>
        {/* <div className='user-profile-component'>
            <Userprofile/>
        </div> */}
        
        </div>
    )
}
export default Createprofile;