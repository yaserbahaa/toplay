import "../css/Login.css"
import { useEffect, useState } from 'react'
import ninja from '/icons8-ninja-80.png'
// import iconProfile from "../assets/icons8-user-64 (1).png"
import iconProfile from "../assets/icons8-user-64 (1).png"
import coverProfile from "../assets/wallpaperflare.com_wallpaper.jpg"
import axios from 'axios'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';



export default function Login(props){
    const [signupToggle,setSignupToggle] = useState(false)
    const [usernameSig,setUsernameSig] = useState("")
    const [passwordSig,setPasswordSig] = useState("")
    const [passwordRepet,setPasswordRepet] = useState("")
    const [usernameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    const [exist,setExist] = useState(null)
    const [user,setUser] =useState()

    
    const navigate = useNavigate()  
    
    useEffect(()=>{

        const isHeLogedIn = async() =>{
            try{
                const resp = await axios.post('https://toplayserver.onrender.com/checkAuth',{},{withCredentials: true,credentials:"include"})
                console.log("user already auth from isHelogedIn in login route"); 
                navigate('/')
            }
            catch{
                console.log("user is not auth from isHelogedIn in login route");
                props.setAuth("wait")
            }
        }
        isHeLogedIn()
    },[])
    


    const signup = async(e)=>{
        e.preventDefault()
        if(passwordSig == passwordRepet){
            try{
                const resp = await axios.post('https://toplayserver.onrender.com/signup',{
                    username:usernameSig,
                    password:passwordSig,
                    icon:iconProfile,
                    cover:coverProfile
            })
                setUsernameSig('')
                setPasswordSig('')
                setPasswordRepet('')
                setSignupToggle(false)
                console.log('user has signin suscufly');
            }
        catch{
            setExist(true)
            console.log("username exist or something went wroung");
            
        }    
    }
    else{
        console.log('password dosent match');
    }
}


const login = async(e)=>{
        e.preventDefault()
    try{
        const resp = await axios.post('https://toplayserver.onrender.com/login',{username:usernameLog,password:passwordLog,},{withCredentials: true,credentials:"include"})
        setUsernameLog('')
        setPasswordLog('')
        console.log("login sucsses");
        window.location.reload(true);
    }
    catch{
        console.log("username or password is wroung");
    }    
}







    
        return(<>
    <div className='logSigCont' >

    <div className={signupToggle ? 'loginDis':'login'} >

        <div className="loginIconCont">
        <img className="loginIcon" src={ninja} alt="" />
        </div>

                <form className="loginLogCont" onSubmit={login}>
                <input className="loginUsername" type="text" value={usernameLog} onChange={(e)=>{setUsernameLog(e.target.value)}} required minLength={3} maxLength={8} placeholder="username" />
                <input className="loginPassword" type="password" value={passwordLog} onChange={(e)=>{setPasswordLog(e.target.value)}} required minLength={4} maxLength={25} placeholder="password"  />
                <div className="loginSumbitCont">
                <button className="loginSumbit">Login</button>
                </div>
             <hr className="loginHr" />  

             </form>

            <div className="loginNoAccCont">
            <h6 className="loginNoAcc" >Dont have an account? <span onClick={()=>{setSignupToggle(true)}} style={{cursor:"pointer",color:"white"}}>Sign in</span></h6>
            </div>
   
    </div>



    <div className={signupToggle ? 'login':'signupDis'} >
    <div className="loginIconCont">
        <img className="loginIcon" src={ninja} alt="" />
        </div>
            <form className="loginLogCont" onSubmit={signup}>
                <input type="text" className="loginUsername" value={usernameSig} onChange={(e)=>{setUsernameSig(e.target.value)}} required minLength={3} maxLength={8} placeholder="username" />
                <input type="password" className="loginPassword_" value={passwordSig} onChange={(e)=>{setPasswordSig(e.target.value)}} required minLength={4} maxLength={25} placeholder="password" />
                <input type="password" className="loginPassword__" value={passwordRepet} onChange={(e)=>{setPasswordRepet(e.target.value)}} required minLength={4} maxLength={25} placeholder="repet password" />
                
                <div className="loginSumbitCont">
                <button className="loginSumbit">Sign in</button>
                </div>
                <hr className="loginHr" />  
            </form>
            
            <div className="loginNoAccCont">
            <h6 className="loginNoAcc">already have an account? <span onClick={()=>{setSignupToggle(false)}} style={{cursor:"pointer",color:"white"}}>Login</span></h6>
            </div>

    </div>

    </div>

</>)
}
