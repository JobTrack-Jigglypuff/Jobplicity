import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
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
import {
  setPopUp,
  setEditApp,
  setItemData,
} from '../Redux/slice/dashBoardSlice';

function AppFormList() {
  const [stages, setStages] = React.useState('');
  const userID = useAppSelector((state) => state.dashboard.data.user_id);
  const editAppMode = useAppSelector((state) => state.dashboard.editApp);
  const itemData = useAppSelector((state) => state.dashboard.itemData);

  const companyName = useRef<HTMLInputElement | any>(null);
  const jobTitle = useRef<HTMLInputElement | any>(null);
  const description = useRef<HTMLInputElement | any>(null);
  const urlLink = useRef<HTMLInputElement | any>(null);
  const salary = useRef<HTMLInputElement | any>(null);
  const location = useRef<HTMLInputElement | any>(null);
  const deadline = useRef<HTMLInputElement | any>(null);
  const contact = useRef<HTMLInputElement | any>(null);
  const stage = useRef<HTMLInputElement | any>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setEditApp(false));
      dispatch(setItemData({}));
      dispatch(setPopUp(false));
    };
  }, []);

  useEffect(() => {
    if (editAppMode) {
      companyName.current.value = itemData.company_name;
      jobTitle.current.value = itemData.job_title;
      description.current.value = itemData.description;
      urlLink.current.value = itemData.url;
      salary.current.value = itemData.salary;
      location.current.value = itemData.location;
      deadline.current.value = itemData.deadline;
      contact.current.value = itemData.contact;
      stage.current.value = itemData.stage;
    }
  }, [editAppMode]);

  const handleClick = () => {
    //Make a fetch request to DB and store app data
    const formData = {
      user_id: userID,
      app_id: itemData.app_id,
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

    if (!editAppMode) {
      console.log('FETCH REQUEST FOR NEW APP');
      fetch('http://localhost:3000/newapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => dispatch(setData(data)));
    } else {
      console.log('application formData', formData);
      fetch('http://localhost:3000/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => dispatch(setData(data)));
    }

    // alert('Application created!');
    // setOpen(false);
    dispatch(setPopUp(false));
  };

  const handleCancel = () => {
    dispatch(setPopUp(false));
    // setOpen(false);
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
        {console.log('itemData', itemData)}
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
          variant='contained'
          style={{
            width: '20ch',
            height: '8ch',
            padding: '10px',
            margin: '50px',
            backgroundColor: '#ff9999',
          }}
        >
          Save
        </Button>
        <Button
          onClick={handleCancel}
          startIcon={<DeleteIcon />}
          variant='contained'
          style={{
            width: '20ch',
            height: '8ch',
            padding: '10px',
            margin: '50px',
            backgroundColor: '#40514e',
          }}
        >
          Cancel
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default AppFormList;
