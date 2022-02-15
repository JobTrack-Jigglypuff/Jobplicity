import * as React from 'react';
import '../styles/Login.scss';
import { useState } from 'react';
import TextField from './TextField';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setSignup } from '../Redux/slice/signupSlice';

const Login = () => {
  const [error, useError] = useState(false);

  const signupState = useAppSelector(state => state.signup.isSignup);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className='login-container'>
        <h1>Welcome to Jobplicity!</h1>

        <TextField
          error={error}
          label='Username'
          helperText=''
          password={false}
        />
        <TextField
          error={error}
          label='Password'
          helperText='Incorrect Username/Password'
          password={true}
        />

        <div className='button-container'>
          <div className='login-button'>
            <a>Login</a>
          </div>
          <div className='signup-button' onClick={() => dispatch(setSignup(true))}>
            <a>Signup</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
