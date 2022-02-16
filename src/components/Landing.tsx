import * as React from 'react';
import DragDropCanvas from './DragDropCanvas';
import PopUpNew from './PopUpNew';

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
        <DragDropCanvas />
      </div>
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'right',
          height: '100%',
          padding: '10px',
          margin: '10px',
          borderRadius: 8,
        }}
      >
        <PopUpNew />
      </div>
    </>
  );
}

export default Home;
