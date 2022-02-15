import * as React from 'react';
import { useState } from 'react';
import '../styles/Signup.scss';
import TextField from './TextField';

const Signup = () => {
  const [error, useError] = useState(false);

  return (
    <>
      <div className='signup-container'>
        <h1>Welcome to Jobplicity!</h1>
        <div>
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
      </div>

      <div className='button-container'>
        <div className='login-button'>
          <a>Login</a>
        </div>
        <div className='signup-button'>
          <a>Signup</a>
        </div>
      </div>
    </>
  );
};

export default Signup;
