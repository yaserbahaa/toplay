import { useEffect, useRef, useState } from "react"
import "../css/Content.css"
import "../css/ASideBar.css"
import "../css/Navbar.css"
import CreatePost from "./CreatePost"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import dev from '../assets/icons8-source-code-48.png'
import dis from '../assets/icons8-discord-48.png'
import icon from '../assets/icons8-ninja-80 (1).png'


export default function ASideBar(props){
      const [show,setShow]=useState(null)
      const [showToplay,setShowToplay]=useState(false)
      const navigate =useNavigate()
        

      function toplay(){
          setShowToplay(true)
      }
      function toplayNone(){
          setShowToplay(false)
      }


      function profile(){
          navigate("/profile")
      }

      return(<>      
        <div className={showToplay ? "AsideBarshowToplay" : "dontShowToplay"}>
        <h1 onClick={()=>{navigate("/")}} className="toplayTitle">toplay</h1>

        <a className="toplayDiscord" href="">
        {dis ? <img className="toplayDiscordImg" src={dis} alt="" /> : ""}
        <p className="toplayDiscordTitle">discord</p>
        </a>

        <Link className="toplayDeveloper" to={"/developer"}>
        {dev ? <img className="toplayDeveloperImg" src={dev} alt="" /> : ""}
        <p className="toplayDeveloperTitle">developer</p>
        </Link>
        </div>

        <div className="ASideBarParent" >
        <div className="ASideBar" >

        <img onClick={toplay} src={icon} alt="" className="AsideBarToplayIcon"/>


        <div className='ASideBartImgCont'>
            <img className="ASideBarImg" onClick={profile} src={props.tokenData.icon} alt="" />
        </div>
        <p className="aSideBarUsername" onClick={profile}>{props.tokenData.username}</p>
        </div>
        <div className="aSideBarUploadParent"> 
            <button className="aSideBarUpload" onClick={()=>{setShow(true) ; document.body.style.overflow='hidden hidden' }}>Post / Story</button>
        </div>
        </div>

     <div onClick={()=>{setShow(false); document.body.style.overflow='hidden auto'}} className={show ? 'showBlur': 'dontShowBlur'} >
    </div> 

     <div className={show ? 'show': 'dontShow'} >
         <CreatePost tokenData={props.tokenData} setShow={setShow}/> 
    </div> 
        <div onClick={toplayNone} className={showToplay ? "AsideBarShowToplayBlur" : "dontShowToplay"}>
        </div>



    </>)
}





