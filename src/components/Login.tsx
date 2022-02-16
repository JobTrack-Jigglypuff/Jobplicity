import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

// import useAxios from '../utils/useAxios';
import TextField from './TextField';
import { LoginForm } from '../../interfaces';
import { setSignup } from '../Redux/slice/signupSlice';
import { setData, setFullName } from '../Redux/slice/dashBoardSlice';

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
          console.log('data from login', data);
          dispatch(setData(data.data));
          dispatch(setFullName(data.data.fullname));
          navigate('/home', { replace: true });
        }
      })
      .catch((err: AxiosError) => {
        useError(true);
      });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    console.log('inside keydown func');
    if (e.key === 'Enter') {
      console.log('pressed enter key');
      e.preventDefault();
      e.stopPropagation();
      handleLogin();
    }
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
          className={error ? 'error' : ''}
          error={error}
          label='Username'
          helperText=''
          password={false}
          onChange={(e) => useUsername(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
        />
        <TextField
          id=''
          className={error ? 'error' : ''}
          error={error}
          label='Password'
          helperText='Incorrect Username/Password'
          password={true}
          onChange={(e) => usePassword(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
        />

        <div className='button-container'>
          <div
            className='already-button'
            onClick={() => dispatch(setSignup(true))}
          >
            <a>Don't have an account?</a>
          </div>
          <div className='login-button' onClick={handleLogin}>
            <a>Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
