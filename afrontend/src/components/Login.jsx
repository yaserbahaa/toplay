import { useEffect, useState } from 'react'
import ninja from '/icons8-ninja-80.png'
import iconProfile from "../assets/icons8-user-64 (1).png"
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
                const resp = await axios.post('http://localhost:3000/checkAuth',{},{withCredentials: true,})
                console.log("user already authetcated"); 
                setUser(resp.data)
                navigate('/')
            }
            catch{
                console.log("user is not authetcated");
            }
        }
        isHeLogedIn()
    },[])
    


    const signup = async(e)=>{
        e.preventDefault()
        if(passwordSig == passwordRepet){
            try{
                const resp = await axios.post('http://localhost:3000/signup',{
                    username:usernameSig,
                    password:passwordSig,
                    icon:iconProfile,
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
            console.log(exist);
            
        }    
    }
    else{
        console.log('password dosent match');
    }
}


const login = async(e)=>{
        e.preventDefault()
    try{
        const resp = await axios.post('http://localhost:3000/login',{username:usernameLog,password:passwordLog,},{withCredentials: true,})
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
    <div style={{display:"flex" ,flexDirection:"column",width:"310px",height:"335px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"#242526",border:"1px solid rgb(51,51,51)",borderRadius:"11px"}}>
    <div className={signupToggle ? 'loginDis':'login'} >
        <img style={{width:"72px",marginLeft:"123px",marginTop:"8px"}} src={ninja} alt="" />
            <form onSubmit={login} style={{display:"flex", alignContent:'center',flexWrap:"wrap",flexDirection:"column",gap:"15px",marginTop:"21px"}}>
                <input type="text" value={usernameLog} onChange={(e)=>{setUsernameLog(e.target.value)}} required minLength={3} maxLength={8} placeholder="username" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}}/>
                <input type="password" value={passwordLog} onChange={(e)=>{setPasswordLog(e.target.value)}} required minLength={4} maxLength={25} placeholder="password" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}} />
                <button style={{marginLeft:'116px',marginTop:'10px',width:"86px",backgroundColor:'rgb(131 131 131)',color:"white",borderRadius:'3px',border:'1px solid rgb(51, 51, 51)',cursor:"pointer"}}>Login</button>
            </form>
        <hr style={{width:'200px',marginTop:"30px"}}/>  
            
            <h5 style={{marginLeft:"92px" ,marginBottom:"0px",color:"white"}}>contuine with google</h5>
            <h6 style={{marginLeft:'79px',marginTop:"29px",color:"white"}}>Dont have an account? <span onClick={()=>{setSignupToggle(true)}} style={{cursor:"pointer"}}>Sign in</span></h6>
    </div>




    <div className={signupToggle ? 'signup':'signupDis'} >
        <img style={{width:"72px",marginLeft:"123px",marginTop:"8px"}} src={ninja} alt="" />
            <form onSubmit={signup} style={{display:"flex", alignContent:'center',flexWrap:"wrap",flexDirection:"column",gap:"15px",marginTop:"21px"}}>
                <input type="text" value={usernameSig} onChange={(e)=>{setUsernameSig(e.target.value)}} required minLength={3} maxLength={8} placeholder="username" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}}/>
                {/* <input type="email" placeholder="email" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}}/> */}
                <input type="password" value={passwordSig} onChange={(e)=>{setPasswordSig(e.target.value)}} required minLength={4} maxLength={25} placeholder="password" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}} />
                <input type="password" value={passwordRepet} onChange={(e)=>{setPasswordRepet(e.target.value)}} required minLength={4} maxLength={25} placeholder="repet password" style={{width:"165px",marginLeft:"72.5px",marginRight:"72.5px",height:"18px",outline:"none",borderRadius:'2px',backgroundColor:"rgba(63, 63, 63, 0.94)",border:"none",color:"white",paddingLeft:'6px'}} />

                <button style={{marginLeft:'116px',marginTop:'10px',width:"86px",backgroundColor:'rgb(131 131 131)',color:"white",borderRadius:'3px',border:'1px solid rgb(51, 51, 51)',cursor:"pointer"}}>Sign in</button>
            </form>
            
        {/* <hr style={{width:'200px',marginTop:"30px"}}/>   */}
            {/* <h5 style={{marginLeft:"92px" ,marginBottom:"0px",color:"white"}}>contuine with google</h5> */}
            <h6 style={{marginLeft:'79px',marginTop:"29px",color:"white"}}>already have an account? <span onClick={()=>{setSignupToggle(false)}} style={{cursor:"pointer"}}>Login</span></h6>

    </div>

    </div>
</>)
}
