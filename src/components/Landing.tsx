import * as React from 'react';
import HorizontalDragDrop from './HorizontalDragDrop';
import PopUpNew from './PopUpNew';


function Home() {

  return (
    <>    
    <div className='home_page' style={{display:'inline-flex', flexDirection:'row', justifyContent:'center', height:'100%', padding:'10px', margin:'10px'}}>
        <HorizontalDragDrop />
    </div>
    <div style={{display:'inline-flex', flexDirection:'row', justifyContent:'right', height:'100%', padding:'10px', margin:'10px', borderRadius:8}}>
        <PopUpNew />
    </div>
    
    </>
  );
}

export default Home;
