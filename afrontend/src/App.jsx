import { Navigate, Route, Routes,useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './Home'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import axios from 'axios'
import UserProfile from './components/UserProfile'
import Cs2 from './components/games/Cs2'
import Lol from './components/games/Lol'
import Valo from './components/games/Valo'
import Warz from './components/games/Warz'
import Chat from './components/Chat'

function App() {
    const [routeColor,setRouteColor]=useState("")
  const [data,setData]=useState('')
  const [tokenData,setTokenData]= useState('')
  const [friendsData,setFriendsData] =useState('')
  const [auth,setAuth] =useState("notAuth")

  const navigate = useNavigate()
  

  const resetScroll =()=>{
    document.body.style.overflow='hidden auto'

}
resetScroll()

  useEffect(()=>{

    const isHeAuth = async() =>{
      try{
          const resp = await axios.post('https://toplayserver.onrender.com/checkAuth',{},{withCredentials: true,credentials:"include"})
          setAuth("auth")
          console.log("user already authetcated isHeAuth"); 
      }
      catch{
          console.log("user is not auth from isHeAuth");
          navigate('/login')
      }
  }

  isHeAuth()

    const refreshToken = async() =>{
          try{
            const resp = await axios.post('https://toplayserver.onrender.com/refreshToken',{},{withCredentials: true,credentials:"include"})
            setTimeout(() => {
              refreshToken()
              console.log("calling refreshToken fun to get user new token");
            }, 1000*60*5);
            console.log("user token has been refreshed");
          }
          catch{
            console.log("could not refresh token bec user is not authentcated");
            isHeAuth()
          }

      }
        
        const tokenData = async() =>{
          try{
              const resp = await axios.get('https://toplayserver.onrender.com/tokenData',{withCredentials: true,credentials:"include"})
              setTokenData(resp.data)
          }
          catch{
              console.log("could not get token data bec user is not authentcated");
              isHeAuth()
          }

      }
      
    const getData = async() =>{
        try{
            const resp = await axios.get('https://toplayserver.onrender.com/data',{withCredentials: true,credentials:"include"})
            setData(resp.data)
        }
        catch{
            console.log("could not get user data");
        }

    }


    const friendsData = async()=>{
      try{
        const resp = await axios.get("https://toplayserver.onrender.com/userFriends",{withCredentials:true,credentials:"include"})
        setFriendsData(resp.data)
      }catch{
        console.log("could not get friends data");
      }
      
  
    }
    refreshToken()
    tokenData()
    getData()
    friendsData()
},[])
  return (
    <>
    <div className={auth !== "notAuth" ? 'auth' : "notAuth"}>
    <h1 style={{margin:"0px" , color:"white"}}>loading wait ...</h1>
    </div>
        <Routes>
        <Route path='/login' element={<Login setAuth={setAuth} />}/>
        <Route path='/*' element={<Home data={data} tokenData={tokenData} friendsData={friendsData} setRouteColor={setRouteColor} routeColor={routeColor}/>}/>
        <Route path='/profile' element={<Profile tokenData={tokenData}/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile/id/:id' element={<UserProfile tokenData={tokenData}/>}/>
        <Route path='/lol' element={<Lol data={data} tokenData={tokenData} friendsData={friendsData} setRouteColor={setRouteColor} routeColor={routeColor}/>}/>
        <Route path='/valo' element={<Valo data={data} tokenData={tokenData} friendsData={friendsData} setRouteColor={setRouteColor} routeColor={routeColor}/>}/>
        <Route path='/csgo' element={<Cs2 data={data} tokenData={tokenData} friendsData={friendsData} setRouteColor={setRouteColor} routeColor={routeColor}/>}/>
        <Route path='/warz' element={<Warz data={data} tokenData={tokenData} friendsData={friendsData} setRouteColor={setRouteColor} routeColor={routeColor}/>}/>
        </Routes>
    </>
  )
}

export default App
