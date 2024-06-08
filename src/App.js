import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './compontents/home/Home';
import  {Navabar}  from './compontents/layout/Navabar';

function App() {
  return (
    <main>
      <Navabar/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      </main>
  );
}

export default App;
