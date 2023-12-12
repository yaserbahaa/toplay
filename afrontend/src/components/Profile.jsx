import { useEffect, useState } from "react";
import Navbar from "./Navbar";import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios";
import "../css/profile.css"
import "../css/Content.css"
import test from "../assets/icons8-call-of-duty-warzone-100 (2).png"


 
export default function Profile(props){
    const [routeChoose,setRouteChoose] = useState('friends')    
    const [posts,setPosts] = useState()  
    
    const [previewUploadImg,SetPreviewUploadImg] = useState('')    
    const [coverPreviewUploadImg,SetCoverPreviewUploadImg] = useState('') 


    const tokenData =props.tokenData
    const Navigate = useNavigate()  


    function handleUploadChagne(e){
        const imgUpload = e.target.files[0]

        if(e.target.files[0].type == "image/png" || e.target.files[0].type =="image/jpg" || e.target.files[0].type =="image/jpeg" || e.target.files[0].type =="image/gif"){
            SetPreviewUploadImg(URL.createObjectURL(e.target.files[0]))
            handleUpload(imgUpload)
        }
        else{
            console.log("user should upload img only");
        }
    }

    async function handleUpload(imgUpload){
        try{
            const upload = new FormData()
            upload.append("file",imgUpload)
            upload.append("cloud_name","yaserbahaa")
            upload.append("upload_preset","zvqf7n1i")

            if(imgUpload.type =="image/png" || imgUpload.type =="image/jpg" || imgUpload.type =="image/jpeg" || imgUpload.type =="image/gif"|| imgUpload.type =="image/svg"){
            console.log("its image and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/image/upload',upload)
            console.log(resp.data.url);
            const iconUrlStore = resp.data.url
            
            if(iconUrlStore){
            const resp = await axios.patch('https://toplayserver.onrender.com/updateIcon',{iconUrl:iconUrlStore},{withCredentials:true,credentials:"include"})
            console.log("img have been store it in database")
            }   
            else{
            console.log("could not store img in database ");
            SetPreviewUploadImg("")
            }
            }
            catch(err){
                console.log("could not upload img or store it in db " +err);
                SetPreviewUploadImg("")
            }
            }
    else{
        console.log("img required to upload")
        SetPreviewUploadImg("")
    }
    }
    catch(error){
        console.log("something worung "+error);  
        SetPreviewUploadImg("") 
    }
    }


    //cover handle
    
    
    async function CoverHandleUpload(coverImgUpload){
        if(coverImgUpload){
        }
        else{
            console.log("upload required");
            SetCoverPreviewUploadImg("")
        }    
        try{
            const upload = new FormData()
            upload.append("file",coverImgUpload)
            upload.append("cloud_name","yaserbahaa")
            upload.append("upload_preset","zvqf7n1i")

            if(coverImgUpload.type =="image/png" || coverImgUpload.type =="image/jpg" || coverImgUpload.type =="image/jpeg" || coverImgUpload.type =="image/gif"|| coverImgUpload.type =="image/svg"){
            console.log("its image and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/image/upload',upload)
            console.log(resp.data.url);
            const coverUrlStore = resp.data.url
            
            if(coverUrlStore){
                const resp = await axios.patch('https://toplayserver.onrender.com/updateCover',{coverUrl:coverUrlStore},{withCredentials:true,credentials:"include"})
            console.log("img have been store it in database")
            }   
            else{
            console.log("could not store img in database ");
            SetCoverPreviewUploadImg("")
        }
            }
            catch(err){
                console.log("could not upload img or store it in db " +err);
                SetCoverPreviewUploadImg("")
            }
            }
    else{
        console.log("img required to upload")
        SetCoverPreviewUploadImg("")

    }
    }
    catch(error){
        console.log("something worung "+error);  
        SetCoverPreviewUploadImg("") 
    }
    }
    function coverHandleUploadChagne(e){
        const coverImgUpload = e.target.files[0]
        if(e.target.files[0].type == "image/png" || e.target.files[0].type =="image/jpg" || e.target.files[0].type =="image/jpeg" || e.target.files[0].type =="image/gif"){
            SetCoverPreviewUploadImg(URL.createObjectURL(e.target.files[0]))
             CoverHandleUpload(coverImgUpload)
        }
        else{
            console.log("user should upload img only");
        }
    }
    
    
    const logout = async()=>{
        try{
            const resp = await axios.post('https://toplayserver.onrender.com/logout',{},{withCredentials: true,credentials:"include"})
            console.log("logout sucsses");
            console.log(resp.status);    
            Navigate("/login")
        }
        catch{
            console.log("logout faild");
        }    
    }
    function userProifle(e){
        const userId = e.target.getAttribute("data-userid")
        Navigate(`/profile/id/${userId}`)
    }
    
    useEffect(()=>{
        const resetScroll =()=>{
            document.body.style.overflow='hidden auto'
        }
        resetScroll()
        async function profilePosts(){
            try{
                const resp = await axios.get("https://toplayserver.onrender.com/ownerProfileData",{withCredentials:true,credentials:"include"})
                setPosts(resp.data)
            }
            catch{
                console.log("could not get posts data from profile");
            }
        }
        profilePosts()
    },[])
    return(<>
    <Navbar tokenData={props.tokenData}/>
    <div className="profileHeader">
        <div className="profileCoverCont">
        <label>
        <input type="file" onChange={coverHandleUploadChagne}/>
            {coverPreviewUploadImg ? <img className="profileCover" src={coverPreviewUploadImg} alt="" /> : <img className="profileCover" src={tokenData.cover} alt="" />}
        </label>
        </div>
        <div className="profileImgUsernameContParent">
        <div className="profileImgUsernameCont">
            <div className="profileImgCont">
            <label className="profileImgLabel">
        <input type="file" onChange={handleUploadChagne}/>
            {previewUploadImg ? <img className="profileImg" src={previewUploadImg} alt="" /> : <img className="profileImg" src={tokenData.icon} alt="" />}
        </label>
            </div>
            <div className="profileUsernameCont">
                <p className="profileUsername">{tokenData.username}</p>
                <span onClick={()=>{setRouteChoose("friends")}} style={{color:"#676767",cursor:"pointer"}}>{tokenData.friendsData ? Object.keys(tokenData.friendsData).length : ""}friends</span>
                <button className="profileOptionsBtn__" onClick={logout}>logout</button>
            </div>
        </div>
        </div>
        <div className="profileOptionsContParent">
        <div className="profileOptionsCont">
            <button onClick={()=>{setRouteChoose("friends")}} className="profileOptionsBtnFriends">Friends</button>
            <button onClick={()=>{setRouteChoose("posts")}} className="profileOptionsBtn">Posts</button>
            <button onClick={()=>{setRouteChoose("videos")}} className="profileOptionsBtn">Videos</button>
            <button onClick={()=>{setRouteChoose("photos")}} className="profileOptionsBtn">Photos</button>
        <div style={{position:"absolute",right:"20px",top:'28px'}}>
        <button className="profileOptionsBtn_" onClick={logout}>logout</button>
        </div>
        </div>
        </div>
    </div>


    <div className="profileBody">

    <div className={routeChoose == "friends" ? "profileFriendsContParent" : "profileRouteNone"}>

    <div className="profileFriendsTilteCont">
    <h1 className="profileFriendsTilte">
    your friends
    </h1>
    </div>

    <div className="profileFriendsCont">
    {tokenData ? tokenData.friendsData.map(friend =>{
        return(
            <div key={friend._id} className="profileFriends">
        <div className="profileFriendsImgCont">
            <img data-userid={friend.friendId} onClick={userProifle} className="profileFriendsImg" src={friend.friendIcon} alt="" />
        </div>
        <div className="profileFriendsUsernameCont">
        <p data-userid={friend.friendId} onClick={userProifle} className="profileFriendsUsername">{friend.friendUsername}</p>
        </div>
        </div>
            )
        }) : ""}
    </div>
    </div>
        


        <div className={routeChoose == "posts" ? "profilePosts" : "profileRouteNone"}>

            <div className='contentParent_'>
    {posts ? posts.map((post) =>{
            return(
                <div key={post._id} className='contentChildCont' >
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" ,position:"relative"}}>
        <div className='contentImgCont' >
            <img className="contentImg" data-userid={post.id} onClick={userProifle} src={post.icon} alt="" />
        </div>
        <div style={{display:"flex",alignContent:'center',flexWrap:"wrap"}}>
        <p data-userid={post.id} onClick={userProifle} className="contentUsername" >{post.username}</p>
        <p className="contentGame">{post.game}</p>
        {/* <p className="ContentCreatedAt" > {`* Created At ${post.createdAt} *`}</p> */}
        </div>
        </div>
            {post.imgUrl ? <img  src={post.imgUrl} alt="" className="contentImgView"/> : <video src={post.videoUrl} className="contentVideoView" controls/>}
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        {/* <img data-postid={post._id} data-like={post.like} onClick={like} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img data-postid={post._id} data-unlike={post.like} onClick={unLike} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img src={comment} alt="" style={{cursor:"pointer"}}/> */}
        </div>
        <div>
            {/* <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>{showLike ? showLike : post.like}likes </p> */}
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"24px",marginBottom:"0px",overflowWrap:'break-word',width:"100%"}}>{post.text}</p>
        </div>
        <div>
            {/* <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 0 comments</p> */}
        </div>
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    
     </div>
    )
    }).slice(0,10)
    : ""}
    </div>
        </div>
        
        <div className={routeChoose == "videos" ? "profileVideos" : "profileRouteNone"}>
        <div className='contentParent_'>
    {posts ? posts.map((post) =>{
            return(
                <div key={post._id} className={post.videoUrl ? 'contentChildCont' :"profileRouteNone"} >
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" ,position:"relative"}}>
        <div className='contentImgCont' >
            <img className="contentImg" data-userid={post.id} onClick={userProifle} src={post.icon} alt="" />
        </div>
        <div style={{display:"flex",alignContent:'center',flexWrap:"wrap"}}>
        <p data-userid={post.id} onClick={userProifle} className="contentUsername" >{post.username}</p>
        <p className="contentGame">{post.game}</p>
        {/* <p className="ContentCreatedAt" > {`* Created At ${post.createdAt} *`}</p> */}
        </div>
        </div>
            {post.videoUrl ?  <video src={post.videoUrl} className="contentVideoView" controls/> : ""}
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        {/* <img data-postid={post._id} data-like={post.like} onClick={like} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img data-postid={post._id} data-unlike={post.like} onClick={unLike} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img src={comment} alt="" style={{cursor:"pointer"}}/> */}
        </div>
        <div>
            {/* <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>{showLike ? showLike : post.like}likes </p> */}
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"24px",marginBottom:"0px",overflowWrap:'break-word',width:"100%"}}>{post.text}</p>
        </div>
        <div>
            {/* <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 0 comments</p> */}
        </div>
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    
     </div>
    )
    }).slice(0,10)
    : ""}
    </div>
        </div>
        
        <div className={routeChoose == "photos" ? "profilePhotos" : "profileRouteNone"}>
        <div className='contentParent_'>
    {posts ? posts.map((post) =>{
            return(
                <div key={post._id} className={post.imgUrl ? 'contentChildCont' :"profileRouteNone"} >
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" ,position:"relative"}}>
        <div className='contentImgCont' >
            <img className="contentImg" data-userid={post.id} onClick={userProifle} src={post.icon} alt="" />
        </div>
        <div style={{display:"flex",alignContent:'center',flexWrap:"wrap"}}>
        <p data-userid={post.id} onClick={userProifle} className="contentUsername" >{post.username}</p>
        <p className="contentGame">{post.game}</p>
        {/* <p className="ContentCreatedAt" > {`* Created At ${post.createdAt} *`}</p> */}
        </div>
        </div>
            {post.imgUrl ? <img  src={post.imgUrl} alt="" className="contentImgView"/> : ""}
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        {/* <img data-postid={post._id} data-like={post.like} onClick={like} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img data-postid={post._id} data-unlike={post.like} onClick={unLike} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/> */}
        {/* <img src={comment} alt="" style={{cursor:"pointer"}}/> */}
        </div>
        <div>
            {/* <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>{showLike ? showLike : post.like}likes </p> */}
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"24px",marginBottom:"0px",overflowWrap:'break-word',width:"100%"}}>{post.text}</p>
        </div>
        <div>
            {/* <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 0 comments</p> */}
        </div>
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    
     </div>
    )
    }).slice(0,10)
    : ""}
    </div>
        </div>
    </div>

    </>)
}