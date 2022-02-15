import * as React from 'react';
import '../styles/LandingPage.scss';
import Login from './Login';

const LandingPage = () => {
  return (
    <>
      <div className='landing-container'>
        <Login />
      </div>
    </>
  );
};

export default LandingPage;