import * as React from 'react';
import '../styles/Login.scss';
import { useState, useEffect } from 'react';
import TextField from './TextField';

const Login = () => {
  const [error, useError] = useState(false);
  const [signUp, useSignUp] = useState(false);

  return (
    <>
      <div className='login-container'>
        <h1>Welcome to Jobplicity!</h1>
        {signUp ? (
          <div className='signup-textfield'>
          <div className='left-container'>
            <TextField
              error={error}
              label='Full Name'
              helperText=''
              password={false}
            />
            <TextField
              error={error}
              label='Username'
              helperText='Not a valid username'
              password={false}
            />
          </div>
          <div className='right-container'>
            <TextField
              error={error}
              label='Password'
              helperText=''
              password={true}
            />
            <TextField
              error={error}
              label='Verify Password'
              helperText="Password doesn't match"
              password={true}
            />
          </div>
          </div>
        ) : (
          <>
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
          </>
        )}
        <div className='button-container'>
          <div className='login-button' onClick={() => useSignUp(false)}>
            <a>Login</a>
          </div>
          <div className='signup-button' onClick={() => useSignUp(true)}>
            <a>Signup</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
