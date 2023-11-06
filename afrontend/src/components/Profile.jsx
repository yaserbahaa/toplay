import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";




 
export default function Profile(){
    const[user,setUser]= useState()
    const Navigate = useNavigate()
    const logout = async()=>{
        try{
            const resp = await axios.post('http://localhost:3000/logout',{},{withCredentials: true,})
            console.log("logout sucsses");
            console.log(resp.status);    
            Navigate("/login")
        }
        catch{
            console.log("logout faild");
        }    
    }
    useEffect(()=>{
        const userData = async()=>{
            try{
                const resp = await axios.get("http://localhost:3000/userData",{withCredentials:true})
                setUser(resp.data)
                console.log("user data recived");
                console.log(resp);
            }
            catch{
                console.log("could not get user data");
            }
        }
        userData()
    },[])
    return(<>
    <Navbar/>
    <div style={{marginTop:'58px'}}>
        <h1>profile compont</h1>
        <h1>{user !==undefined ? user.data.username : ''}</h1>
    <button onClick={logout}>logout</button>
    </div>
    </>)
}