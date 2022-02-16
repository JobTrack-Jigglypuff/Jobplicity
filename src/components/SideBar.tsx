import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Logout from './Logout';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import { useAppSelector } from '../Redux/hooks';
>>>>>>> dev

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  backgroundColor: '#8785A2',
  ...(theme.mixins.toolbar as BaseCSSProperties),
  justifyContent: 'flex-end',
}));

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const fullName = useAppSelector((state) => state.dashboard.fullName);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //handling sidebar route
  const navigate = useNavigate();
  const handleBoard = () => {
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  const handleActivities = () => {
    setTimeout(() => {
      navigate('/activities');
    }, 1000);
  };
  const handleContact = () => {
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar sx={{ backgroundColor: '#8785A2' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            {`${fullName.toUpperCase()}'S BOARD`}
          </Typography>
          <Typography
            variant='h6'
            align='center'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Welcome to Jobplicity!
          </Typography>
          <Typography variant='h6'>
            <Logout />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: '#e0ece4', height: '100vh' }}>
          <ListItem button key={'Board'} onClick={handleBoard}>
            <ListItemText primary={'Board'} />
          </ListItem>
          <ListItem button key={'Activities'} onClick={handleActivities}>
            <ListItemText primary={'Activities'} />
          </ListItem>
          <ListItem button key={'Contact'} onClick={handleContact}>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
