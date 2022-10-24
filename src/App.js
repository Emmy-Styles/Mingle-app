import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Users from './Components/Users/Users'

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Contact' element = {<Contact />}/>
          <Route path='/About' element = {<About />}/>
          <Route path='/Users' element = {<Users />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
