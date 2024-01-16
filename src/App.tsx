import React from 'react';
import './App.css';
import { LogoLoader } from './components/logoLoading/logoLoader';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { ContextState } from './context/context';
import { Context } from 'vm'

function App() {
  const {showHome} = ContextState() as Context

  return (
    <div className="bg-black">
      <LogoLoader/>
      <div className={`${showHome ? "block" : "hidden"}`}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
