import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import {Route, Routes} from 'react-router-dom';
import ReserveSlot from './ReserveSlot';
import MapContainer from './MapContainer';

function App(){
  const [token, setToken] = useState("")

  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  })
  return (
    <>
      <Navbar/>
        <div className='container'>
          {token?
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route path='/reserve-slot' element={<ReserveSlot/>}/>
            <Route path='/map' element={<MapContainer/>}/>
          </Routes>
          :
          <Routes>
            <Route path='*' element={<Signin/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          }
        </div>
    </>
  )

}

export default App