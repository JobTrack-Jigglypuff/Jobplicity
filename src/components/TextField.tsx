import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields({
  error,
  label,
  helperText,
  password
}: {
  error: boolean;
  label: string;
  helperText: string;
  password: boolean;
}) {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField
          error={error}
          id='outlined-error-helper-text'
          label={label}
          defaultValue=''
          helperText={error ? helperText : ''}
          type={password ? 'password' : 'text'}
        />
      </div>
    </Box>
  );
}
