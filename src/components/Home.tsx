import * as React from 'react';
import SideBar from './SideBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Landing from './Landing';
import Stack from '@mui/material/Stack';
import '../styles/HomePage.scss';

function Home() {

  return (
    <>    
      <div className='home_page'>
      <CssBaseline />
      <Container maxWidth="xl">
        <Stack direction='column'>
        <SideBar />
        <Landing />
        </Stack> 

      </Container>
    </div>
    </>
  );
}

export default Home;
