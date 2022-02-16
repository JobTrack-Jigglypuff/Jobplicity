import * as React from 'react';
import { BrowserRouter as Router, useNavigate} from "react-router-dom";
import '../styles/LogOut.scss';

const Contact = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      setTimeout(()=>{navigate('/')}, 1000);
    }
    return (
        <div>
            <button className='signout-button' type="button" onClick={handleClick}>
                GoBack
            </button>
        </div>
    );
};
  
  export default Contact;