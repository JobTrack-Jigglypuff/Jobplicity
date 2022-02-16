import * as React from 'react';
import SideBar from './SideBar'
import {Link} from 'react-router-dom';
import '../styles/contact.scss';
// import logo from '../asset/contact_logo.jpg';

const Contact = () => {
    

    return (
        <>
            <div className='contact-container'>
                {/* <img src={logo}/> */}
                <h1>Contact Us</h1>
                <p>Join us on Github, or contact us below. </p>
                <Link className='goback' to={'/home'}>
                    <button type="button">GoBack</button>
                </Link>
            </div>
            
        </>
      );
};
  
  export default Contact;
