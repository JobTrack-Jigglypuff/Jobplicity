import * as React from 'react';
import HorizontalDragDrop from './HorizontalDragDrop';
import PopUp from './PopUp';

function Home() {
  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100%',
          padding: '10px',
          margin: '10px',
        }}
      >
        <HorizontalDragDrop />
      </div>
      <PopUp />
    </>
  );
}

export default Home;
