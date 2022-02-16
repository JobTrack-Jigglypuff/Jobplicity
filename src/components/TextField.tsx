import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields({
  id,
  error,
  label,
  helperText,
  password,
  onChange,
}: {
  id: string;
  error: boolean;
  label: string;
  helperText: string;
  password: boolean;
  onChange: (e: any) => void;
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
          id={id}
          error={error}
          label={label}
          defaultValue=''
          helperText={error ? helperText : ''}
          type={password ? 'password' : 'text'}
          onChange={onChange}
        />
      </div>
    </Box>
  );
}
