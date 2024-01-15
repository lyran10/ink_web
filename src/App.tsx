import React from 'react';
import './App.css';
import { LogoLoader } from './components/logoLoading/logoLoader';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="bg-black">
      <LogoLoader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
