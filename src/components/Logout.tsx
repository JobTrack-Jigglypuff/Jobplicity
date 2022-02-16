import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../Redux/hooks';
import '../styles/LogOut.scss';
import { setSignup } from '../Redux/slice/signupSlice';
import Button from '@mui/material/Button';

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setSignup(false));
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <>
      <Button
        sx={{ backgroundColor: '#ff9999' }}
        variant='contained'
        onClick={handleClick}
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOut;
