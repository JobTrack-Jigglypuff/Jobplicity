import * as React from 'react';
import { BrowserRouter as Router, useNavigate} from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      setTimeout(()=>{navigate('/')}, 1000);
    }
    return (
      <button style={{width:'10ch', height:'5ch'}} className= "btn" type="button" onClick={handleClick}>
        Sign Out 
      </button>
    );
};
  
  export default SignOut;