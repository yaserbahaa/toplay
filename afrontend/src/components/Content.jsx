
import profile from '../assets/icons8-user-64 (1).png'
import photo from '../assets/pxfuel.jpg'
import LikeDefult from '../assets/icons8-heart-24.png'
import Like from '../assets/icons8-heart-24 (1).png'
import comment from '../assets/icons8-comment-24.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'




export default function Content(props){
    const [LikeToggle,setLikeToggle]=useState(false)
    const [showLike,setLike]=useState()


    const posts = props.data.posts
    const navigate=useNavigate()


    async function like (e){
        let like = e.target.getAttribute("data-like") 
        const postId =e.target.getAttribute("data-postid")
        console.log(like);
        setLike(showLike => showLike = like + 1)
        setLikeToggle(!LikeToggle) ;
        const resp = await axios.patch('http://localhost:3000/likeUpdate',{_id:postId,like:true},{withCredentials: true,})
    }
    async function unLike (e){
        let unLike =e.target.getAttribute("data-unlike")
        console.log(unLike);
        unLike -= 1 ;
        const postId =e.target.getAttribute("data-postid")
        setLikeToggle(!LikeToggle) 
        const resp = await axios.patch('http://localhost:3000/likeUpdate',{_id:postId,unLike:true},{withCredentials: true,});
    }

    function userProifle(e){
    const userId = e.target.getAttribute("data-userid")
    navigate(`/profile/id/${userId}`)
    }

    useEffect(()=>{
        // console.log(test);
    },[])
        return(<>
    <div className='contentParent'>
    {posts ? posts.map((post) =>{
            return(
                <div key={post._id} className='content' >
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img data-userid={post.id} onClick={userProifle} src={post.icon} alt="" style={{width:"40px"}}/>
        </div>
        <div >
        <p data-userid={post.id} onClick={userProifle} style={{fontSize:"14px",color:"white",cursor:"pointer" ,marginLeft:"12px",display:'inline-block'}}>{post.username}</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span style={{marginRight:"5px"}}>*</span> {"Created At "+post.createdAt}</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            {post.imgUrl ? <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={post.imgUrl} alt="" style={{width:"100%",height:"100%"}}/> : <video src={post.videoUrl} style={{width:"100%",height:"100%"}} controls/>}
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img data-postid={post._id} data-like={post.like} onClick={like} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img data-postid={post._id} data-unlike={post.like} onClick={unLike} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>{showLike ? showLike : post.like}likes </p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>{post.text}</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 0 comments</p>
        </div>
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    
     </div>
    )
    })
    : ""}
    </div>
            </>)
        }