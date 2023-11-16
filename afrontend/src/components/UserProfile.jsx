import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
 



export default function UserProfile(){
    const [user,setUser]=useState('')
    let {id} = useParams()

    async function addFriend(){
        try{
            const resp = await axios.post("http://localhost:3000/addFriend",{idAdd:id},{withCredentials:true})
            console.log("user added");
        }
        catch(err){
            console.log("could not add friend "+err);
        }
    }


    useEffect(()=>{
        async function UserProfile(){
    try{
        const resp = await axios.get(`http://localhost:3000/userProfile/id/${id}`,{withCredentials:true})
        setUser(resp.data)
        console.log(resp);
        console.log("userData resived");
    }
    catch(err){
        console.log("could not get user data"+err);
    }
}
UserProfile()
},[])
    return(<>
    <Navbar/>
        <h1>userprofile</h1>
        <button onClick={addFriend}>add friend</button>
    </>)
}