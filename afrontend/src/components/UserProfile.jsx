import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import "../css/profile.css"
import "../css/UserProfile.css"
import "../css/Content.css"



export default function UserProfile(props){
    const [user,setUser]=useState('')
    const [routeChoose,setRouteChoose] = useState('friends')    

    let {id} = useParams()
    const Navigate = useNavigate()
    async function addFriend(){
        try{
            const resp = await axios.post("http://localhost:3000/addFriend",{idAdd:id},{withCredentials:true})
            console.log("user added");
        }
        catch(err){
            console.log("could not add friend "+err);
        }
    }

    function userProifle(e){
        const userId = e.target.getAttribute("data-userid")
        Navigate(`/profile/id/${userId}`)
        }

    useEffect(()=>{

        async function UserProfile(){
    try{
        const resp = await axios.get(`http://localhost:3000/userProfile/id/${id}`,{withCredentials:true})
        setUser(resp.data)
        console.log(resp);
        console.log("userData resived");
    }
    catch(err){
        console.log("could not get user data"+err);
    }
}
UserProfile()
},[id])
    return(<>
    <Navbar tokenData={props.tokenData}/>


    <div className="profileHeader">
        <div className="profileCoverCont">
            {user ? <img className="profileCover" src={user.userData.cover} alt="" />:""} 
        </div>
        <div className="profileImgUsernameContParent">
        <div className="profileImgUsernameCont">
            <div className="profileImgCont">
            {user ? <img className="profileImg" src={user.userData.icon} alt="" />:""} 
            </div>
            <div className="profileUsernameCont">
                {user ? <p className="profileUsername">{user.userData.username}</p> : ""}
                <span onClick={()=>{setRouteChoose("friends")}} style={{color:"#676767",cursor:"pointer"}}>{user.userFriendsData ? Object.keys(user.userFriendsData).length : ""}friends</span>
                <button className="profileOptionsBtn__" onClick={addFriend}>add</button>
            </div>
        </div>
        </div>
        <div className="profileOptionsContParent">
        <div className="profileOptionsCont">
            <button onClick={()=>{setRouteChoose("friends")}} className="profileOptionsBtn">Friends</button>
            <button onClick={()=>{setRouteChoose("posts")}} className="profileOptionsBtn">Posts</button>
            <button onClick={()=>{setRouteChoose("videos")}} className="profileOptionsBtn">Videos</button>
            <button onClick={()=>{setRouteChoose("photos")}} className="profileOptionsBtn">Photos</button>
        <div style={{position:"absolute",right:"20px",top:'26px'}}>
        <button className="profileOptionsBtn_" onClick={addFriend}>add</button>
        </div>
        </div>
        </div>
    </div>


    <div className="profileBody">

    <div className={routeChoose == "friends" ? "profileFriendsContParent" : "profileRouteNone"}>

    <div className={"profileFriendsTilteCont"}>
    <h1 className={  "profileFriendsTilte" }>
    {user ? user.userData.username :""} friends
    </h1>
    </div>

    <div className={"profileFriendsCont"}>
    {user ? user.userFriendsData.map(friend =>{
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
    {user ? user.userPostsData.map((post) =>{
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
    {user ? user.userPostsData.map((post) =>{
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
    {user ? user.userPostsData.map((post) =>{
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