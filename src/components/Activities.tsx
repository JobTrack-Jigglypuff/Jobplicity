import * as React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import '../styles/LogOut.scss';

const Activities = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <button className='signout-button' type='button' onClick={handleClick}>
      Sign Out
    </button>
  );
};

export default Activities;
