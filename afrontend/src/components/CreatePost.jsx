import "../css/CreatePost.css"
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
    const [game,setGame] = useState('all')   
    const [lol,setLol] = useState(null)   
    const [valorant,setValorant] = useState(null)   
    const [all,setAll] = useState(true)   
    const [csgo2,setCsgo2] = useState(null)   
    const [warz,setWarz] = useState(null)   



    
    //story upload
    const [storyImgOrVideoUpload,setStoryImgOrVideoUpload]=useState('')   
    const [storyPreviewUploadImg,SetStoryPreviewUploadImg] = useState('')    
    const [storyPreviewUploadVideo,SetStoryPreviewUploadVideo] = useState('')    
    const [storyText,setStoryText] = useState('')


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
        if(imgOrVideoUpload){
            setText("")
            setGame("")
            props.setShow(false)
            document.body.style.overflow='auto'
        }
        else{
            console.log("upload required");
        }    
        SetPreviewUploadImg("")
        SetPreviewUploadVideo("")
        setImgOrVideoUpload("")
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
            const resp = await axios.post('http://localhost:3000/storePost',{imgUrl:imgUrlStore,text:text,game:game},{withCredentials:true})
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
            const resp = await axios.post('http://localhost:3000/storePost',{videoUrl:videoUrlStore,text:text,game:game},{withCredentials:true})
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

    
    
    //     story upload
    
    
    function storyHandleUploadChagne(e){
        setStoryImgOrVideoUpload(e.target.files[0])

        if(e.target.files[0].type == "image/png" || e.target.files[0].type =="image/jpg" || e.target.files[0].type =="image/jpeg" || e.target.files[0].type =="image/gif"){
            SetStoryPreviewUploadImg(URL.createObjectURL(e.target.files[0]))
        }
        else if(e.target.files[0].type=="video/mp4" || e.target.files[0].type =="image/mpeg4" || e.target.files[0].type =="image/mov"){
            SetStoryPreviewUploadVideo(URL.createObjectURL(e.target.files[0]))
        }
        else{
            console.log("user should upload img or video only");
        }
    }

    async function storyHandleUpload(e){
        e.preventDefault()
        if(storyImgOrVideoUpload){
            setGame("")
            setStoryText("")
            props.setShow(false)
            document.body.style.overflow='auto'
        }
        else{
            console.log("upload required");
        }    
        SetStoryPreviewUploadImg("")
        SetStoryPreviewUploadVideo("")
        setStoryImgOrVideoUpload("")
        try{
            const upload = new FormData()
            upload.append("file",storyImgOrVideoUpload)
            upload.append("cloud_name","yaserbahaa")
            upload.append("upload_preset","zvqf7n1i")

            if(storyImgOrVideoUpload.type =="image/png" || storyImgOrVideoUpload.type =="image/jpg" || storyImgOrVideoUpload.type =="image/jpeg" || storyImgOrVideoUpload.type =="image/gif"){
            console.log("its image and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/image/upload',upload)
            console.log(resp.data.url);
            const storyImgUrlStore = resp.data.url
            
            if(storyImgUrlStore){
            const resp = await axios.post('http://localhost:3000/storeStory',{storyImgUrl:storyImgUrlStore,text:text},{withCredentials:true})
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
             else if(storyImgOrVideoUpload.type =="video/mp4" || storyImgOrVideoUpload.type =="image/mpeg4" || storyImgOrVideoUpload.type =="image/mov"){
            console.log("its video and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/video/upload',upload)
            console.log(resp.data.url);
            const storyVideoUrlStore = resp.data.url
            
            if(storyVideoUrlStore){
            const resp = await axios.post('http://localhost:3000/storeStory',{storyVideoUrl:storyVideoUrlStore,text:text},{withCredentials:true})
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


console.log(game);
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

    <div style={{display:"flex",paddingLeft:"11px",width: "459px"}}>
    <div className='createPostImgCont'>
    <img src={props.tokenData.icon ? props.tokenData.icon : ""} alt=""  className='createPostImg'/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>{props.tokenData.username ? props.tokenData.username : "user"}</p>
    </div>

    <div>
        <textarea value={text} onChange={(e)=> setText(e.target.value)} maxLength={425} placeholder='Your Text' style={{width:"378px",marginTop:"13px",paddingLeft:"14px",height:'102px',backgroundColor:"#242526",resize:"none",outline:"none",color:"white",border:"none"}} rows="4" cols="50">
        </textarea>
    <div className="createPostGamesCont">
        <button onClick={()=>{setGame("lol") ;setLol(true);setValorant(false);setAll(false);setCsgo2(false);setWarz(false)}} className={lol ? "createPostlol":"createPostGamesBtn"}>lol</button>
        <button onClick={()=>{setGame("valorant");setLol(false);setValorant(true);setAll(false);setCsgo2(false);setWarz(false)}} className={valorant ? "createPostvalorant":"createPostGamesBtn"}>valorant</button>
        <button onClick={()=>{setGame("all");setLol(false);setValorant(false);setAll(true);setCsgo2(false);setWarz(false)}} className={all ? "createPostall":"createPostGamesBtn"}>All</button>
        <button onClick={()=>{setGame("csgo2");setLol(false);setValorant(false);setAll(false);setCsgo2(true);setWarz(false)}} className={csgo2 ? "createPostcsgo2":"createPostGamesBtn"}>csgo2</button>
        <button onClick={()=>{setGame("warz");setLol(false);setValorant(false);setAll(false);setCsgo2(false);setWarz(true)}} className={warz ? "createPostwarz":"createPostGamesBtn"}>warzone </button> 
    </div>
    </div>
    <div className='uploadParent' >
        <div className='uploadHover'>
        <div className={previewUploadVideo||previewUploadImg ? "previewUpload":'previewUploadNone'}>
            <img onClick={()=>{SetPreviewUploadImg("");SetPreviewUploadVideo("");setImgOrVideoUpload('')}} style={{position:"absolute",cursor:"pointer",top:"4px",left:"4px",zIndex:"100"}} src={x} alt="" />
        {previewUploadVideo ? <video style={{width:'100%',height:"100%"}} src={previewUploadVideo} controls alt=""/> : ""}
        {previewUploadImg ? <img style={{width:'100%',height:"100%"}} src={previewUploadImg} alt=""/> : ""}
            </div>
        <label className={previewUploadVideo||previewUploadImg ? "uploadNone":'upload2'}  >
            Upload Photo/Video
        <input type="file" accept="video/*,image/*" onChange={handleUploadChagne} />
        </label>
        </div>
    </div>
    <div className='btnSumbitPostParent'>
        <button onClick={handleUpload}  className='btnSumbitPost'>Sumbit</button>
    </div>

    </div>





    <div className={show ? 'dontShowStort':'showStory'}>

    <div style={{display:"flex",paddingLeft:"11px" ,width: "459px"}}>
    <div className='createPostImgCont'>
    <img src={props.tokenData.icon ? props.tokenData.icon : ""} alt="" className='createPostImg'/>
    </div>
    <p style={{fontSize:"13px",color:"white",marginLeft:"10px"}}>{props.tokenData.username ? props.tokenData.username : "user"}</p>
    </div>

    <div>
        <textarea value={storyText} onChange={(e)=> setStoryText(e.target.value)} maxLength={425} placeholder='Your Text' style={{width:"452px",marginTop:"13px",paddingLeft:"14px",height:'102px',backgroundColor:"#242526",resize:"none",outline:"none",color:"white",border:"none"}} rows="4" cols="50">
        </textarea>
    </div>

    <div className='uploadParent' >
        <div className='uploadHover'>
            <div className={storyPreviewUploadVideo||storyPreviewUploadImg ? "previewUpload":'previewUploadNone'}>
            <img onClick={()=>{SetStoryPreviewUploadImg("");SetStoryPreviewUploadVideo("");setStoryImgOrVideoUpload('')}} style={{position:"absolute",cursor:"pointer",top:"4px",left:"4px",zIndex:"100"}} src={x} alt="" />
        {storyPreviewUploadVideo ? <video style={{width:'100%',height:"100%"}} src={storyPreviewUploadVideo} controls alt=""/> : ""}
        {storyPreviewUploadImg ? <img style={{width:'100%',height:"100%"}} src={storyPreviewUploadImg} alt=""/> : ""}
            </div>
        <label className={storyPreviewUploadVideo||storyPreviewUploadImg ? "uploadNone":'upload2'}  >
            Upload Photo/Video
        <input type="file" accept="video/*,image/*" onChange={storyHandleUploadChagne} />
        </label>
        </div>
    </div>
    <div className='creatPostStoryBtnParent'>
        <button onClick={storyHandleUpload} className='btnSumbitPost'>Sumbit</button>
    </div>
    </div>


        </>)
}