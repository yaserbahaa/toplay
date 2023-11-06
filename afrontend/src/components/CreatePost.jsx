import { useState } from 'react'
import x from '../assets/icons8-x-24 (1).png'
import profile from '../assets/icons8-user-64 (1).png'







export default function CreatePost(props){
    const [show,setShow] = useState(true)
    return(<>
    <div style={{display:'flex',justifyContent:"center",position:"relative",alignContent:"center",flexWrap:"wrap",width:"100%",height:"55px"}}>
    <div className='imgParent' style={{position:"absolute",cursor:"pointer",left:"0px",top:"14px",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",borderRadius:"50%",height:"33px",width:"33px",margin:"0px 0px 0px 15px"}}  onClick={()=>{props.set(false);document.body.style.overflow='auto'}}>
        <img src={x} alt=''/>
    </div>
    <div>
    <h2 className={show ? 'postToggleTrue':'postToggleFalse'} onClick={()=>{setShow(show ? show = show : !show) }}  >post</h2>
    </div>
    <hr style={{margin:"0px 50px 0px 50px"}}/>
    <div>
    <h2 className={show ? 'storyToggleTrue':'storyToggleFalse'} onClick={()=>{setShow(show ? !show : show = show)}} >story</h2>
    </div>

    </div>


    <div className={show ? 'showPost':'dontShowPost'}>
    <div style={{display:"flex",paddingLeft:"11px"}}>
    
    <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
    <img src={profile} alt="" style={{width:"40px"}}/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>name</p>
    </div>

        <form action="" >
    <div>
        <textarea minLength={0} maxLength={425} placeholder='Your Text' style={{width:"450px",marginTop:"16px",paddingLeft:"14px",height:'75px',backgroundColor:"#242526",resize:"none",outline:"none",color:"white",border:"none"}} rows="4" cols="50">
        </textarea>
    </div>
    <div className='uploadParent' >
        <div className='uploadHover'>
        <label className='upload' htmlFor="upload" >
            Upload Photo/Video
        <input type="file" name="" id="upload" />
        </label>
        </div>
    </div>
    <div className='btnSumbitPostParent'>
        <button className='btnSumbitPost'>Sumbit</button>
    </div>
        </form>

    </div>


    <div className={show ? 'dontShowStort':'showStory'}>
    <div style={{display:"flex",paddingLeft:"11px"}}>
    
    <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
    <img src={profile} alt="" style={{width:"40px"}}/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>name</p>
    </div>

        <form action="" >
    <div>
        <textarea  placeholder='Your Text' style={{width:"450px",marginTop:"16px",paddingLeft:"14px",height:'75px',backgroundColor:"#242526",resize:"none",outline:"none",color:"white",border:"none"}} rows="4" cols="50">
        </textarea>
    </div>

    <div className='uploadParent' >
        <div className='uploadHover'>
        <label className='upload' htmlFor="upload" >
            Upload Photo/Video
        <input type="file" name="" id="upload" />
        </label>
        </div>
    </div>
    <div className='btnSumbitPostParent'>
        <button className='btnSumbitPost'>Sumbit</button>
    </div>
        </form>
    </div>


        </>)
}