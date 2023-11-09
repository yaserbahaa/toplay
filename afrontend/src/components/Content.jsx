
import profile from '../assets/icons8-user-64 (1).png'
import photo from '../assets/pxfuel.jpg'
import LikeDefult from '../assets/icons8-heart-24.png'
import Like from '../assets/icons8-heart-24 (1).png'
import comment from '../assets/icons8-comment-24.png'
import { useState } from 'react'




export default function Content(props){
    const [LikeToggle,setLikeToggle]=useState(false)
    console.log(props.data.posts ? props.data.posts[2].createdAt  : '');
    console.log(new Date());
    console.log(props.data.posts);

    
    return(<>
    <div className='contentParent'>
    {props.data.posts ? props.data.posts.map((post) =>
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={post.icon} alt="" style={{width:"40px"}}/>
        </div>
        <div >
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>{post.username}</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span style={{marginRight:"5px"}}>*</span> {"Created At "+post.createdAt}</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            {post.imgUrl ? <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={post.imgUrl} alt="" style={{width:"100%",height:"100%"}}/> : <video src={post.videoUrl} style={{width:"100%",height:"100%"}} controls/>}
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>0 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>{post.text}</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 0 comments</p>
        </div>
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
     </div>) : ""}
            </div>
        </>)
}