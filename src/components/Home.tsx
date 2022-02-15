import * as React from 'react';
import SideBar from './SideBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Landing from './Landing';
import Stack from '@mui/material/Stack';
import AppForm from './AppFormList';

function Home() {
  return (
    <>
      <div>
        <CssBaseline />
        <Container maxWidth='xl'>
          <Stack direction='column'>
            <SideBar />
            <Landing />
            {/* <AppForm /> */}
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Home;
