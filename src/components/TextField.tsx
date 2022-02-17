import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields({
  id,
  className,
  error,
  label,
  helperText,
  password,
  onChange,
  onKeyDown,
}: {
  id: string;
  className: string;
  error: boolean;
  label: string;
  helperText: string;
  password: boolean;
  onChange: (e: any) => void;
  onKeyDown: (e: any) => void;
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
          className={className}
          error={error}
          label={label}
          defaultValue=''
          helperText={error ? helperText : ''}
          type={password ? 'password' : 'text'}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </Box>
  );
}
