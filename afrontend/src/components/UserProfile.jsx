import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 



export default function UserProfile(){
    const [user,setUser]=useState('')
    let {id} = useParams()
    useEffect(()=>{
        async function UserProfile(){
    try{
        const resp = await axios.get(`http://localhost:3000/userProfile/id/${id}`,{},{withCredentials:true})
        setUser(resp.data)
        console.log(resp);
    }
    catch(err){
        console.log("could not get user data"+err);
    }
}
UserProfile()
},[])
    return(<>
        <h1>userprofile</h1>
    </>)
}