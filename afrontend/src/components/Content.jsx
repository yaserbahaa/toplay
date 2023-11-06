
import profile from '../assets/icons8-user-64 (1).png'
import photo from '../assets/pxfuel.jpg'
import LikeDefult from '../assets/icons8-heart-24.png'
import Like from '../assets/icons8-heart-24 (1).png'
import comment from '../assets/icons8-comment-24.png'
import { useState } from 'react'




export default function Content(){
    const [LikeToggle,setLikeToggle]=useState(false)
    return(<>
    <div className='contentParent'>
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={profile} alt="" style={{width:"40px"}}/>
        </div>
        <div style={{}}>
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>name</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span>*</span> 1h</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={photo} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>1032 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>thats my js cup</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 232 comments</p>
        </div>
        {/* should be here add coment field */}
        {/* <div>
            <input type="text" />
        </div> */}
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    </div>
    
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={profile} alt="" style={{width:"40px"}}/>
        </div>
        <div style={{}}>
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>name</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span>*</span> 1h</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={photo} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>1032 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>thats my js cup</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 232 comments</p>
        </div>
        {/* should be here add coment field */}
        {/* <div>
            <input type="text" />
        </div> */}
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    </div>
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={profile} alt="" style={{width:"40px"}}/>
        </div>
        <div style={{}}>
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>name</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span>*</span> 1h</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={photo} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>1032 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt veniam nihil harum modi perspiciatis impedit officiis vel aliquid molestias, quis aut minus odit animi ratione sapiente tempore vero enim.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt veniam nihil harum modi perspiciatis impedit officiis vel aliquid molestias, quis aut minus odit animi ratione sapiente tempore vero enim.</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 232 comments</p>
        </div>
        {/* should be here add coment field */}
        {/* <div>
            <input type="text" />
        </div> */}
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    </div>
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={profile} alt="" style={{width:"40px"}}/>
        </div>
        <div style={{}}>
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>name</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span>*</span> 1h</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={photo} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>1032 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>thats my js cup</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 232 comments</p>
        </div>
        {/* should be here add coment field */}
        {/* <div>
            <input type="text" />
        </div> */}
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    </div>
    <div className='content' style={{}}>
    <div style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
        <div style={{width:"40px",height:"40px",borderRadius:"50%", border:"1px solid rgb(89 91 93)"}}>
            <img src={profile} alt="" style={{width:"40px"}}/>
        </div>
        <div style={{}}>
        <p style={{fontSize:"14px",color:"white",marginLeft:"12px",display:'inline-block'}}>name</p>
        <p style={{fontSize:"13px",color:"#939191",marginLeft:"10px",display:'inline-block'}}><span>*</span> 1h</p>
        </div>
        </div>
        <div style={{width:"442px",height:"442px",border:"1px solid rgb(97 97 97)",borderRadius:"4px"}}>
            <img onDoubleClick={()=>{setLikeToggle(!LikeToggle)}} src={photo} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{display:'flex',marginTop:'5px',gap:"8px"}}>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'LikeDefultDis':'LikeDefult'} src={LikeDefult} alt="" style={{cursor:"pointer"}}/>
        <img onClick={()=>{setLikeToggle(!LikeToggle)}} className={LikeToggle ? 'like':'LikeDis'} src={Like} alt="" style={{cursor:"pointer"}}/>
        <img src={comment} alt="" style={{cursor:"pointer"}}/>
        </div>
        <div>
            <p style={{color:"white",fontSize:"14px",marginTop:"8px",marginBottom:"0px"}}>1032 likes</p>
        </div>
        <div>
        <p style={{color:"white",fontSize:"13px",marginTop:"12px",marginBottom:"0px",overflowWrap:'break-word',width:"440px"}}>thats my js cup</p>
        </div>
        <div>
            <p style={{color:"rgb(147, 145, 145)",fontSize:"14px",marginTop:"15px",marginBottom:"0px",cursor:"pointer"}}>View all 232 comments</p>
        </div>
        {/* should be here add coment field */}
        {/* <div>
            <input type="text" />
        </div> */}
        <hr style={{margin:"35px 0px 35px 0px",borderColor:'rgb(97 97 97)'}}/>
    </div>
    </div>
    </>)
}