import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

// import useAxios from '../utils/useAxios';
import TextField from './TextField';
import { LoginForm } from '../../interfaces';
import { setSignup } from '../Redux/slice/signupSlice';
import { setData } from '../Redux/slice/dashBoardSlice';

const Login = () => {
  const [error, useError] = useState(false);
  const [username, useUsername] = useState('');
  const [password, usePassword] = useState('');
  // const [data, useData] = useState({username: '', password: ''});

  const signupState = useAppSelector((state) => state.signup.isSignup);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleLogin = () => {
    const body = { username, password };
    // useData(body);
    axios
      .post<LoginForm>('http://localhost:3000/login', body)
      .then((data: AxiosResponse<any>) => {
        if (data.status === 201) {
          dispatch(setData(data.data));
          navigate('/home', { replace: true });
        }
      })
      .catch((err: AxiosError) => {
        useError(true);
      });
  };

  // const { response, err } = useAxios({
  //   method: 'post',
  //   url: 'http://localhost:3000/login',
  //   body: data,
  // });

  // useEffect(() => {
  //   console.log(response, err);
  //   if (response !== null) {
  //     if (response.status === 201) {
  //       navigate('/home', { replace: true });
  //     }
  //   } else if (err === '') {
  //     useError(true);
  //   };
  // }, [response]);

  return (
    <>
      <div className='login-container'>
        <h1>Welcome to Jobplicity!</h1>

        <TextField
          id=''
          error={error}
          label='Username'
          helperText=''
          password={false}
          onChange={(e) => useUsername(e.target.value)}
        />
        <TextField
          id=''
          error={error}
          label='Password'
          helperText='Incorrect Username/Password'
          password={true}
          onChange={(e) => usePassword(e.target.value)}
        />

        <div className='button-container'>
          <div className='login-button' onClick={handleLogin}>
            <a>Login</a>
          </div>
          <div
            className='signup-button'
            onClick={() => dispatch(setSignup(true))}
          >
            <a>Signup</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
