import { useEffect, useState } from 'react'
import x from '../assets/icons8-x-24 (1).png'
import profile from '../assets/icons8-user-64 (1).png'
import axios from "axios";







export default function CreatePost(props){
    const [show,setShow] = useState(true)
    const [imgOrVideoUpload,setImgOrVideoUpload]=useState('')   
    const [previewUploadImg,SetPreviewUploadImg] = useState('')    
    const [previewUploadVideo,SetPreviewUploadVideo] = useState('')    
    const [text,setText] = useState('')    

    // console.log(props.data.currentUser.username);
    function handleUploadChagne(e){
        setImgOrVideoUpload(e.target.files[0])

        if(e.target.files[0].type == "image/png" || e.target.files[0].type =="image/jpg" || e.target.files[0].type =="image/jpeg" || e.target.files[0].type =="image/gif"){
            SetPreviewUploadImg(URL.createObjectURL(e.target.files[0]))
        }
        else if(e.target.files[0].type=="video/mp4" || e.target.files[0].type =="image/mpeg4" || e.target.files[0].type =="image/mov"){
            SetPreviewUploadVideo(URL.createObjectURL(e.target.files[0]))
        }
        else{
            console.log("user should upload img or video only");
        }
    }
    


    async function handleUpload(e){
        e.preventDefault()
        // if(imgOrVideoUpload){
        //     setText("")
        //     props.setShow(false)
        // }
        // else{
        //     console.log("upload required");
        // }
        setText("")
        props.setShow(false)
        SetPreviewUploadImg("")
        SetPreviewUploadVideo("")
        setImgOrVideoUpload("")
        document.body.style.overflow='auto'
        try{
            const upload = new FormData()
            upload.append("file",imgOrVideoUpload)
            upload.append("cloud_name","yaserbahaa")
            upload.append("upload_preset","zvqf7n1i")

            if(imgOrVideoUpload.type =="image/png" || imgOrVideoUpload.type =="image/jpg" || imgOrVideoUpload.type =="image/jpeg" || imgOrVideoUpload.type =="image/gif"){
            console.log("its image and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/image/upload',upload)
            console.log(resp.data.url);
            const imgUrlStore = resp.data.url
            
            if(imgUrlStore){
            const resp = await axios.post('http://localhost:3000/storePost',{imgUrl:imgUrlStore,text:text},{withCredentials:true})
            console.log("img have been store it in database ")
            }   
            else{
            console.log("could not store img or video in database ");
            }
            }
            catch(err){
                console.log("could not upload img or store it in db " +err);
            }
            }
             else if(imgOrVideoUpload.type =="video/mp4" || imgOrVideoUpload.type =="image/mpeg4" || imgOrVideoUpload.type =="image/mov"){
            console.log("its video and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/video/upload',upload)
            console.log(resp.data.url);
            const videoUrlStore = resp.data.url
            
            if(videoUrlStore){
            const resp = await axios.post('http://localhost:3000/storePost',{videoUrl:videoUrlStore,text:text},{withCredentials:true})
            console.log("video have been store it in database");
        }   
        else{
            console.log("could not store video in database");
        }
    }
        catch(err){
            console.log("could not upload video" +err);
        }
    }
    else{
        console.log("img or video required to upload")
    }
    }
    catch(error){
        console.log("something worung "+error);   
    }
    }



return(<>
    <div style={{display:'flex',justifyContent:"center",position:"relative",alignContent:"center",flexWrap:"wrap",width:"100%",height:"55px"}}>
    <div className='imgParent' style={{position:"absolute",cursor:"pointer",left:"0px",top:"14px",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",borderRadius:"50%",height:"33px",width:"33px",margin:"0px 0px 0px 15px"}}  onClick={()=>{props.setShow(false);document.body.style.overflow='auto'}}>
        <img src={x} alt=''/>
    </div>
    <div>
    <h2 className={show ? 'postToggleTrue':'postToggleFalse'} onClick={()=>{setShow(show ? show : !show) }}  >post</h2>
    </div>
    <hr style={{margin:"0px 50px 0px 50px"}}/>
    <div>
    <h2 className={show ? 'storyToggleTrue':'storyToggleFalse'} onClick={()=>{setShow(show ? !show : show )}} >story</h2>
    </div>

    </div>


    <div className={show ? 'showPost':'dontShowPost'}>
    <div style={{display:"flex",paddingLeft:"11px"}}>
    
    <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
    <img src={props.data.currentIcon ? props.data.currentIcon : ""} alt="" style={{width:"40px"}}/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>{props.data.currentUsername ? props.data.currentUsername : "user"}</p>
    </div>

        <form onSubmit={handleUpload} >
    <div>
        <textarea value={text} onChange={(e)=> setText(e.target.value)} maxLength={425} placeholder='Your Text' style={{width:"450px",marginTop:"16px",paddingLeft:"14px",height:'75px',backgroundColor:"#242526",resize:"none",outline:"none",color:"white",border:"none"}} rows="4" cols="50">
        </textarea>
    </div>
    <div className='uploadParent' >
        <div className='uploadHover'>
        <label className='upload' >
            {previewUploadVideo ? <video style={{width:'100%',height:"100%"}} src={previewUploadVideo} controls alt=""/> : ""}
            {previewUploadImg ? <img style={{width:'100%',height:"100%"}} src={previewUploadImg} alt=""/> : ""}
            Upload Photo/Video
        <input type="file" accept="video/*,image/*" onChange={handleUploadChagne} />
        </label>
        </div>
    </div>
    <div className='btnSumbitPostParent'>
        <button type='submit' className='btnSumbitPost'>Sumbit</button>
    </div>
        </form>

    </div>


    <div className={show ? 'dontShowStort':'showStory'}>
    <div style={{display:"flex",paddingLeft:"11px"}}>
    
    <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
    <img src={props.data.currentIcon ? props.data.currentIcon : ""} alt="" style={{width:"40px"}}/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>{props.data.currentUsername ? props.data.currentUsername : "user"}</p>
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