import { useState } from 'react';
import profile from '../assets/icons8-user-64 (1).png'
import "../css/Stores.css"
import { useNavigate, useParams } from 'react-router-dom';
import ShowStory from './ShowStory';

 

export default function Stores(props){
    const [storyImg,setStoryImg]=useState()
    const [storyVideo,setStoryVideo]=useState()
    const [showStory ,setShowStory]=useState()
    const [storyData ,setStoryData]=useState()


    const stories = props.data 
    const navigate=useNavigate()


    function userProifle(e){
        const userId = e.target.getAttribute("data-userid")
        navigate(`/profile/id/${userId}`)
        }

        function storyHandler(e){
            const img = e.target.getAttribute("data-img")
            const video = e.target.getAttribute("data-video")
            const icon = e.target.getAttribute("data-icon")
            const username = e.target.getAttribute("data-username")
            const id = e.target.getAttribute("data-id")

            console.log(video);
            console.log(img);
            if(img){
                setStoryImg(img)
                setShowStory(true)
                setStoryData({icon:icon,username:username,id:id})
                document.body.style.overflow='hidden'

            }
            else{
                setStoryVideo(video)
                setShowStory(true)
                setStoryData({icon:icon,username:username,id:id})
                document.body.style.overflow='hidden'

            }
        }
    return(<>
        <div className='storyGrandCont' >
        {stories ? stories.map((story)=>{
            return(
        <div className="storyParent" key={story._id} >
            <div className='storyCont' >
            {/* <img className='storyImg'  src={story.icon} alt="" /> */}
            <img className='storyImg' data-img={story.storyImgUrl} data-video={story.storyVideoUrl} data-icon={story.icon} data-username={story.username} data-id={story.id} onClick={storyHandler} src={story.icon} alt="" />
            </div>
            <p data-userid={story.id} onClick={userProifle} className='storyUsername' >{story.username}</p>
        </div>
                )

        }).slice(0,7) :""}
        </div>
    
        <div className={showStory ? "":"dontShowStory"}>
        <ShowStory setShowStory={setShowStory} setStoryImg={setStoryImg} setStoryVideo={setStoryVideo} storyData={storyData} storyImg={storyImg} storyVideo={storyVideo} />
        </div>
    </>)
}