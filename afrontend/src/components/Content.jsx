
import "../css/Content.css"
// import LikeDefult from '../assets/icons8-heart-24.png'
// import Like from '../assets/icons8-heart-24 (1).png'
// import comment from '../assets/icons8-comment-24.png'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';




export default function Content(props){
    // const [LikeToggle,setLikeToggle]=useState(false)
    // const [showLike,setLike]=useState()
    
    
    const posts = props.data.posts
    const navigate=useNavigate()


    // async function like (e){
    //     let like = e.target.getAttribute("data-like") 
    //     const postId =e.target.getAttribute("data-postid")
    //     console.log(like);
    //     setLike(showLike => showLike = like + 1)
    //     setLikeToggle(!LikeToggle) ;
    //     const resp = await axios.patch('http://localhost:3000/likeUpdate',{_id:postId,like:true},{withCredentials: true,})
    // }
    // async function unLike (e){
    //     let unLike =e.target.getAttribute("data-unlike")
    //     console.log(unLike);
    //     unLike -= 1 ;
    //     const postId =e.target.getAttribute("data-postid")
    //     setLikeToggle(!LikeToggle) 
    //     const resp = await axios.patch('http://localhost:3000/likeUpdate',{_id:postId,unLike:true},{withCredentials: true,});
    // }

    function userProifle(e){
    const userId = e.target.getAttribute("data-userid")
    navigate(`/profile/id/${userId}`)
    document.body.style.overflow='hidden auto'

    }

    function gameRoute(e){
        const game = e.target.getAttribute("data-game")
        if(game =="valorant"){
            navigate("/valo")
        }
        else if(game =="lol"){
            navigate("/lol")
        }
        else if(game =="csgo2"){
            navigate("/csgo")
        }
        else if(game =="warz"){
            navigate("/warz")
        }
    }
    useEffect(()=>{
        // console.log(test);
    },[])
        return(<>


    <div className='contentParent'>

    {posts ? posts.map((post) =>{
            return(
                <div key={post._id} className="contentChildCont"  >
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" ,position:"relative"}}>
        <div className='contentImgCont' >
            <img className="contentImg" data-userid={post.id} onClick={userProifle} src={post.icon} alt="" />
        </div>
        <div style={{display:"flex",alignContent:'center',flexWrap:"wrap"}}>
        <p data-userid={post.id} onClick={userProifle} className="contentUsername" >{post.username}</p>
        <p data-game={post.game} onClick={gameRoute} className="contentGame">{post.game}</p>
        {/* <p className="ContentCreatedAt" > {`* Created At ${post.createdAt} *`}</p> */}
        </div>
        </div>
            {post.imgUrl ? <img  src={post.imgUrl} alt="" className="contentImgView"/> : <video src={post.videoUrl} className="contentVideoView" controls />}
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
    })
    : ""}
    </div>
            </>)
        }