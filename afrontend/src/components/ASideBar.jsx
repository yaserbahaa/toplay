import { useEffect, useRef, useState } from "react"
import "../css/Content.css"
import "../css/ASideBar.css"

import CreatePost from "./CreatePost"
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export default function ASideBar(props){
      const [show,setShow]=useState(null)
      const navigate =useNavigate()


      function profile(){
          navigate("/profile")
      }

         return(<>      
        <div className="ASideBarGrandba">
        <div className="ASideBarParent" >
        <div className="ASideBar" >
        <div className='ASideBartImgCont'>
            <img className="ASideBarImg" onClick={profile} src={props.tokenData.icon} alt="" />
        </div>
        <p className="aSideBarUsername" onClick={profile}>{props.tokenData.username}</p>
        </div>
        <div className="aSideBarUploadParent"> 
            <button className="aSideBarUpload" onClick={()=>{setShow(true) ; document.body.style.overflow='hidden' }}>Post / Story</button>
        </div>
        </div>
        </div>  

     <div onClick={()=>{setShow(false); document.body.style.overflow='auto'}} className={show ? 'showBlur': 'dontShowBlur'} >
    </div> 
     <div className={show ? 'show': 'dontShow'} >
         <CreatePost tokenData={props.tokenData} setShow={setShow}/> 
    </div> 


    </>)
}



// {    click outside close sidebar func
    // const [show,setShow]=useState(false)
    // const showRef = useRef()
    // const showRef2 = useRef()
    // useEffect(()=>{
        
    //         function closeSide (e){
    //                 if(!showRef.current.contains(e.target) && !showRef2.current.contains(e.target)){
    //                         setShow(false)
    //                 // console.log(e)
    //             }
    //         }
    //         document.body.addEventListener('click',closeSide)
    //          return () => {document.body.removeEventListener('click',closeSide)}
        //     jsx
        //     <div>
        //         <button ref={showRef} onClick={()=>{setShow(!show)}}>all</button>
        //     </div>
        //      <div ref={showRef2} className={show ? 'show': 'dontShow'} >
        //         <AllGames/>
        //     </div> 
        // })
    // }