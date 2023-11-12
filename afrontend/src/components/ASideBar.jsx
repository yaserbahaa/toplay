import { useEffect, useRef, useState } from "react"
import CreatePost from "./CreatePost"
import axios from 'axios'



export default function ASideBar(props){
      const [show,setShow]=useState(null)
        useEffect(()=>{

            // const data = async()=>{
            //     try{
            //         const resp = await axios.post
            //     }
            // }

        })

         return(<>      
        <div className="ASideBarGrandba">
        <div onClick={()=>{setShow(true) ; document.body.style.overflow='hidden' }} className="ASideBarParent" style={{borderTopLeftRadius:"363px",borderTopRightRadius:"435px",borderBottomRightRadius:"377px",borderBottomLeftRadius:"281px",BorderRadius:'377px 281px 363px 435px',}}>
        <div className="ASideBar" style={{borderTopLeftRadius:"363px",borderTopRightRadius:"435px",borderBottomRightRadius:"377px",borderBottomLeftRadius:"281px",BorderRadius:'377px 281px 363px 435px',}}>
        <h1 style={{color:"#585858"}}>Post</h1>
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