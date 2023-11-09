import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";




 
export default function Profile(props){
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

    return(<>
    <Navbar tokenData={props.tokenData}/>
    <div style={{marginTop:'58px'}}>
        <h1>profile compont</h1>
    <button onClick={logout}>logout</button>
    </div>
    </>)
}