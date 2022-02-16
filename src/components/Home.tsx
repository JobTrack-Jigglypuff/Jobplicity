import * as React from 'react';
import SideBar from './SideBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import '../styles/HomePage.scss';
import VerticalDragDrop from './VerticalDragDrop';
import PopUpNew from './PopUpNew';

function Home() {

  return (
    <>    
      <div className='home_page'>
          <SideBar />          
          <VerticalDragDrop />
          <div>
            <PopUpNew /> 
          </div>
    </div>
    </>
  );
}

export default Home;
