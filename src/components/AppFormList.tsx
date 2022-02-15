import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@material-ui/core';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete'


function AppFormList() {
    const [stages, setStages] = React.useState('');
    
    const handleClick = () => {
        alert('Data Submitted!');
    }

    const handleCancel = () => {
        alert ('Cancelled Data!');
    }
    const handleChange = (event: SelectChangeEvent) => {
        setStages(event.target.value as string);
      };
    
    //fetch post data to database


  return (
    <Box
      component="form"
      id='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch', height:'10ch', justifyContent:'center' },
      }}
      noValidate
      autoComplete="off"
    >
    <Box sx={{display:'grid', gridTemplateColumns:'auto auto', padding:'10px', margin:'10px', justifyContent:'center' }}>        
        <TextField id="company" label="Company Name" type="input" helperText="Company Name" />
        <TextField id="jobTitle" label="Job Title" type="input" helperText="Job Title" />
        <TextField id="url" label="Url Link" type="input" helperText="Website URL" />
        <TextField id="salary" label="$ Salary" type="input" helperText="Salary" />
        <TextField id="location" label="Location" type="input" helperText="Company Location" />
        <TextField id="deadline" label="MM/DD/YY" type="input" helperText="Deadline" />
        <TextField id="contact" label="Contact" type="input" helperText="Contact" />
        <TextField id="description" label="Description" type="input" helperText="Description" />
        <Select
          value={stages}
          label="Stages"
          onChange={handleChange}
        >
          <MenuItem value={'Applied'}>Applied</MenuItem>
          <MenuItem value={'Interview'}>Interview</MenuItem>
          <MenuItem value={'Rejected'}>Rejected</MenuItem>
        </Select>
        <Divider />
        <Button color="secondary"
        onClick={handleClick}
        startIcon={<SaveIcon />}
        variant="contained"
        style={{width:'20ch',height:'8ch', padding:'10px', margin:'50px'}}
        >
        Save
        </Button>
        <Button color="primary"
        onClick={handleCancel}
        startIcon={<DeleteIcon />}
        variant="contained"
        style={{width:'20ch',height:'8ch', padding:'10px', margin:'50px'}}
        >
        Cancel
        </Button>
    </Box>
    <Box>
        
    </Box>
    
    </Box>
  );
}

export default AppFormList;
