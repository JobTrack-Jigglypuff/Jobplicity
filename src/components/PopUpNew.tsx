import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppFormList from './AppFormList';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setPopUp } from '../Redux/slice/dashBoardSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    backgroundColor: '#EAE7DC',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  //app form open or not
  children?: React.ReactNode;
  onClose: () => void;
}

//Window Title and close action
const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  console.log(children);

  return (
    <DialogTitle
      sx={{ m: 0, p: 2, backgroundColor: '#325670', color: 'white' }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'fixed',
            right: 10,
            top: 8,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function PopUpNew() {
  // const [open, setOpen] = React.useState(false);
  const open = useAppSelector((state) => state.dashboard.popup);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    // setOpen(true);
    dispatch(setPopUp(true));
  };
  const handleClose = () => {
    // setOpen(false);
    dispatch(setPopUp(false));
  };

  return (
    <div>
      <Button
        sx={{ backgroundColor: '#e98074' }}
        variant='outlined'
        onClick={handleClickOpen}
      >
        +
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='App-Form'
        open={open}
      >
        <BootstrapDialogTitle id='App-Form' onClose={handleClose}>
          Application Form
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <AppFormList />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default PopUpNew;
