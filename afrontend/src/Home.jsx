import ASideBar from "./components/BSideBar.jsx";
import BSideBar from "./components/ASideBar.jsx";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";
import Content from "./components/Content.jsx";
import axios from 'axios'
import { useEffect, } from "react";
import { Route, Routes,useNavigate } from 'react-router-dom'







export default function Home(){
    const navigate = useNavigate()
    
    useEffect(()=>{
        const refreshToken = async() =>{
            try{
                const resp = await axios.post('http://localhost:3000/refreshToken',{},{withCredentials: true,})
                console.log("user token has been refreshed");
                console.log("thats his new token"+resp.data.token); 
                setTimeout(() => {
                    refreshToken()
                }, 1000*60*5);
            }
            catch{
                console.log("could not refresh token bec user is not authentcated");
                navigate('/login')
            }
        }
        refreshToken()
    },[])


    return(<>
        <Navbar/>
        <Stores/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <BSideBar/>
        <Content/>
        <ASideBar/>
        </div> 
        
    </>)
}