import { Navigate, Route, Routes,useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './Home'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import axios from 'axios'
import UserProfile from './components/UserProfile'

function App() {
  const [test,setTest]=useState('')
  const [data,setData]=useState('')
  const [tokenData,setTokenData]= useState('')
  const [friendsData,setFriendsData] =useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const refreshToken = async() =>{
        try{
            const resp = await axios.post('http://localhost:3000/refreshToken',{},{withCredentials: true,})
            setTimeout(() => {
              refreshToken()
            }, 1000*60*5);
            console.log("user token has been refreshed");
        }
        catch{
            console.log("could not refresh token bec user is not authentcated");
            navigate('/login')
          }
        }
        const tokenData = async() =>{
          try{
              const resp = await axios.get('http://localhost:3000/tokenData',{withCredentials: true,})
              setTokenData(resp.data)
              console.log("token data resives");
          }
          catch{
              console.log("could not get token data bec user is not authentcated");
          }
      }
    const getData = async() =>{
        try{
            const resp = await axios.get('http://localhost:3000/data',{withCredentials: true,})
            setData(resp.data)
            console.log("post&story data has been resived");
        }
        catch{
            console.log("could not get user data");
        }
    }
    const friendsData = async()=>{
      try{
        const resp = await axios.get("http://localhost:3000/userFriends",{withCredentials:true})
        setFriendsData(resp.data)
        console.log("friends data");
      }catch{
        console.log("could not get friends data");
      }
    }
    refreshToken()
    tokenData()
    getData()
    friendsData()

},[])
  console.log(friendsData);
  return (
    <>
        <Routes>
        <Route path={'/login'} element={<Login />}/>
        <Route path='/*' element={<Home data={data} tokenData={tokenData} friendsData={friendsData}/>}/>
        <Route path='/profile' element={<Profile tokenData={tokenData}/>}/>
        <Route path='*' element={'Back to home page you lost your way'}/>
        <Route path='/profile/id/:id' element={<UserProfile/>}/>
        </Routes>
    </>
  )
}

export default App
