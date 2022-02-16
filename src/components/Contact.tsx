import * as React from 'react';
import SideBar from './SideBar'
import '../styles/contact.scss';
// import logo from '../asset/contact_logo.jpg';

const Contact = () => {
    

    return (
        <div className='contact-container'>
            <SideBar />
            <div className='sec_contact'>
                {/* <img src={logo}/> */}
                <h1>Contact Us </h1>
                <h2>Our Door is always open for a good cup of coffee. Please Join us or contact us by sending Email. </h2>  
                         
            </div>
            <div className='button'>
                <a href='mailto:tinhtarkhin@gmail.com'><button>Email</button></a>
                <a href='/home'><button>Go Back</button></a>  
            </div>
            
        </div>
      );
};
  
  export default Contact;
