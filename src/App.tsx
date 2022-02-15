import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
