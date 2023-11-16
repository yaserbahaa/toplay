import '../css/ShowStory.css'
import { useNavigate, useParams } from 'react-router-dom';



export default function ShowStory(props){
    const storyImg = props.storyImg
    const storyVideo = props.storyVideo
    const storyData = props.storyData
    const navigate=useNavigate()

    function userProifle(e){
        document.body.style.overflow='auto'
        navigate(`/profile/id/${storyData.id}`)
        }

    function storyOff(){
        props.setShowStory(false)
        props.setStoryImg("")
        props.setStoryVideo("")
        document.body.style.overflow='auto'

    }
    return(<>
    <div className="storyOff" onClick={storyOff}>
        
    </div>
    <div className='showStoryCont'>
        <div className='showStoryIconUsernameCont'>
            <div className='showStoryIconCont'>
        {storyData ? <img onClick={userProifle} className='ShowStoryIcon' src={storyData.icon} alt="" /> :""}
            </div>
        {storyData ? <p onClick={userProifle} className='showStoryUsername'>{storyData.username}</p> : ""}
        </div>
        {storyImg ? <img className='showStoryImg' src={storyImg} alt="" /> : ""}
        {storyVideo ? <video className="showStoryVideo" loop={true} autoPlay  alt="" controls><source src={storyVideo}/></video> : ""}
    </div>
    </>)
}