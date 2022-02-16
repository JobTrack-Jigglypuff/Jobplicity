import * as React from 'react';
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@material-ui/core';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setData } from '../Redux/slice/dashBoardSlice';
import axios, { AxiosResponse, AxiosError } from 'axios';

function AppFormList({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [stages, setStages] = React.useState('');
  const userID = useAppSelector((state) => state.dashboard.data.user_id);
  const companyName = useRef<HTMLInputElement>(null);
  const jobTitle = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const urlLink = useRef<HTMLInputElement>(null);
  const salary = useRef<HTMLInputElement>(null);
  const location = useRef<HTMLInputElement>(null);
  const deadline = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);
  const stage = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    //Make a fetch request to DB and store app data
    const formData = {
      user_id: userID,
      company_name: companyName.current?.value,
      job_title: jobTitle.current?.value,
      description: description.current?.value,
      url: urlLink.current?.value,
      salary: salary.current?.value,
      location: location.current?.value,
      deadline: deadline.current?.value,
      contact: contact.current?.value,
      stage: stage.current?.value,
    };
    console.log('formData', formData);

    fetch('http://localhost:3000/newapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => dispatch(setData(data)));
    // axios
    //    .post<LoginForm>('http://localhost:3000/login', formData)
    //    .then((data: AxiosResponse<any>) => {
    //      console.log('data.status', data.status);
    //      if (data.status === 201) {
    //        dispatch(setData(data.data));
    //        navigate('/home', { replace: true });
    //      }
    //    })
    //    .catch((err: AxiosError) => {
    //      useError(true);
    //    });

    // alert('Application created!');
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setStages(event.target.value as string);
  };

  //fetch post data to database

  return (
    <Box
      component='form'
      id='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '20ch',
          height: '10ch',
          justifyContent: 'center',
        },
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          padding: '10px',
          margin: '10px',
          justifyContent: 'center',
        }}
      >
        <TextField
          id='company'
          label='Company Name'
          type='input'
          helperText='Company Name'
          inputRef={companyName}
        />
        <TextField
          id='jobTitle'
          label='Job Title'
          type='input'
          helperText='Job Title'
          inputRef={jobTitle}
        />
        <TextField
          id='url'
          label='Url Link'
          type='input'
          helperText='Website URL'
          inputRef={urlLink}
        />
        <TextField
          id='salary'
          label='$ Salary'
          type='input'
          helperText='Salary'
          inputRef={salary}
        />
        <TextField
          id='location'
          label='Location'
          type='input'
          helperText='Company Location'
          inputRef={location}
        />
        <TextField
          id='deadline'
          label='MM/DD/YY'
          type='input'
          helperText='Deadline'
          inputRef={deadline}
        />
        <TextField
          id='contact'
          label='Contact'
          type='input'
          helperText='Contact'
          inputRef={contact}
        />
        <TextField
          id='description'
          label='Description'
          type='input'
          helperText='Description'
          inputRef={description}
        />
        <Select
          value={stages}
          label='Stages'
          onChange={handleChange}
          inputRef={stage}
        >
          <MenuItem value={'applied'}>Applied</MenuItem>
          <MenuItem value={'phone'}>Phone Interview</MenuItem>
          <MenuItem value={'interview'}>On-Site Interview</MenuItem>
          <MenuItem value={'rejected'}>Rejected</MenuItem>
          <MenuItem value={'offer'}>Offer</MenuItem>
        </Select>
        <Divider />
        <Button
        onClick={handleClick}
        startIcon={<SaveIcon />}
        variant="contained"
        style={{width:'20ch',height:'8ch', padding:'10px', margin:'50px', backgroundColor:'#e98074'}}
        >
          Save
        </Button>
        <Button
        onClick={handleCancel}
        startIcon={<DeleteIcon />}
        variant="contained"
        style={{width:'20ch',height:'8ch', padding:'10px', margin:'50px', backgroundColor:'#325670'}}
        >
          Cancel
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default AppFormList;
