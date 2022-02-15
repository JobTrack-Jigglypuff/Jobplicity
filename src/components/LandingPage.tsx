import * as React from 'react';
import '../styles/LandingPage.scss';
import Login from './Login';
import Signup from './Signup';
import { useAppSelector } from '../Redux/hooks';

const LandingPage = () => {
  const signupState = useAppSelector((state) => state.signup.isSignup);

  return (
    <>
      <div className='landing-container'>
        {signupState ? <Signup /> : <Login />}
      </div>
    </>
  );
};

export default LandingPage;
