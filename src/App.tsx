import React from 'react';
import './App.css';
import { LogoLoader } from './components/logoLoading/logoLoader';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { ContextState } from './context/context';
import { Context } from 'vm'
import { Contact } from './components/contact/contact';

function App() {
  const {showHome} = ContextState() as Context

  return (
    <div className="bg-[#040303]">
      <LogoLoader/>
      {/* <div className={`${showHome ? "block" : "hidden"}`}> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
