import * as React from 'react';
import SideBar from './SideBar';
import '../styles/HomePage.scss';
import PopUpNew from './PopUpNew';
import DragDropCanvas from './DragDropCanvas';

function Home() {
  return (
    <>
      <div className='home_page'>
        <SideBar />
        <DragDropCanvas />
        <div>
          <PopUpNew />
        </div>
      </div>
    </>
  );
}

export default Home;
