import { Route, Routes,useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './Home'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'

function App() {
  return (
    <>
        <Routes>
        <Route path={'/login'} element={<Login />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='*' element={'Back to home page you lost your way'}/>
        </Routes>
    </>
  )
}

export default App
