import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

import TextField from './TextField';
import { SignupForm } from '../../interfaces';
import { setSignup } from '../Redux/slice/signupSlice';
import { setData, setFullName } from '../Redux/slice/dashBoardSlice';

const Signup = () => {
  const [userError, useUserError] = useState(false);
  const [passwordError, usePasswordError] = useState(false);
  const [lowercaseError, useLowercaseError] = useState(false);
  const [uppercaseError, useUppercaseError] = useState(false);
  const [numberError, useNumberError] = useState(false);
  const [atLeastError, useAtLeastError] = useState(false);
  const [fullName, useFullName] = useState('');
  const [username, useUsername] = useState('');
  const [password, usePassword] = useState('');
  const [verifyPassword, useVerifyPassword] = useState('');

  const signupEl = React.useRef<HTMLDivElement | any>();

  const signupState = useAppSelector((state) => state.signup.isSignup);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const lowercase = new RegExp('(?=.*[a-z])');
  const uppercase = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const atLeast = new RegExp('(?=.{5,})');

  const handleSignup = () => {
    const body = { fullName, username, password };
    axios
      .post<SignupForm>('http://localhost:3000/signup', body)
      .then((data: AxiosResponse<any>) => {
        console.log(data);
        if (data.status === 201) {
          dispatch(setFullName(data.data.fullname));
          dispatch(
            setData({
              applied: [],
              interview: [],
              offer: [],
              phone: [],
              rejected: [],
              user_id: data.data.user_id,
            })
          );
          navigate('/home', { replace: true });
        }
      })
      .catch((err: AxiosError) => {
        useUserError(true);
      });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    console.log('inside keydown func');
    if (e.key === 'Enter') {
      console.log('pressed enter key');
      e.preventDefault();
      e.stopPropagation();
      handleSignup();
    }
  };

  useEffect(() => {
    fullName === '' ||
    username === '' ||
    password === '' ||
    verifyPassword === '' ||
    passwordError ||
    lowercaseError ||
    uppercaseError ||
    numberError ||
    atLeastError
      ? (signupEl.current.style.pointerEvents = 'none')
      : (signupEl.current.style.pointerEvents = 'auto');
  }, [
    fullName,
    username,
    password,
    verifyPassword,
    passwordError,
    lowercaseError,
    uppercaseError,
    numberError,
    atLeastError,
  ]);

  useEffect(() => {
    if (!password) {
      usePasswordError(false);
      useLowercaseError(false);
      useUppercaseError(false);
      useNumberError(false);
      useAtLeastError(false);
    }
    password && verifyPassword && password !== verifyPassword
      ? usePasswordError(true)
      : usePasswordError(false);
    password && !lowercase.test(password)
      ? useLowercaseError(true)
      : useLowercaseError(false);
    password && !uppercase.test(password)
      ? useUppercaseError(true)
      : useUppercaseError(false);
    password && !number.test(password)
      ? useNumberError(true)
      : useNumberError(false);
    password && !atLeast.test(password)
      ? useAtLeastError(true)
      : useAtLeastError(false);
  }, [password, verifyPassword]);

  return (
    <>
      <div className='signup-container'>
        <h1>Welcome to Jobplicity!</h1>
        <div>
          <div className='left-container'>
            <TextField
              id=''
              className={''}
              error={false}
              label='Full Name'
              helperText=''
              password={false}
              onChange={(e) => useFullName(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
            <TextField
              id=''
              className={userError ? 'error' : ''}
              error={userError}
              label='Username'
              helperText='Not a valid username'
              password={false}
              onChange={(e) => useUsername(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
          </div>
          <div className='right-container'>
            <TextField
              id='password'
              className={
                passwordError ||
                lowercaseError ||
                uppercaseError ||
                numberError ||
                atLeastError
                  ? 'error'
                  : ''
              }
              error={
                passwordError
                  ? lowercaseError
                    ? uppercaseError
                      ? numberError
                        ? atLeastError
                        : true
                      : true
                    : true
                  : true
              }
              label='Password'
              helperText={`${
                lowercaseError
                  ? 'Must contain at least one lowercase letter'
                  : ''
              } ${
                uppercaseError
                  ? 'Must contain at least one uppercase letter'
                  : ''
              } ${numberError ? 'Must contain at least one number' : ''} ${
                atLeastError ? 'Must contain at least 5 characters' : ''
              }`}
              password={true}
              onChange={(e) => usePassword(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
            <TextField
              id=''
              className={verifyPassword && passwordError ? 'error' : ''}
              error={passwordError}
              label='Verify Password'
              helperText="Password doesn't match"
              password={true}
              onChange={(e) => useVerifyPassword(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
          </div>
        </div>
        <div className='button-container'>
          <div
            className='already-button'
            onClick={() => dispatch(setSignup(false))}
          >
            <a>Already have an account?</a>
          </div>
          <div className='signup-button' ref={signupEl} onClick={handleSignup}>
            <a>Signup</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
