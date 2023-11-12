import profile from '../assets/icons8-user-64 (1).png'
import "../css/Stores.css"

 

export default function Stores(props){
    const stories = props.data 
    

    return(<>
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap",height:'85px',justifyContent:"center",margin:'75px 0px 20px 0px',gap:"23px"}}>
        {stories ? stories.map((story)=>{
            return(
        <div className="storyParent" key={story._id} >
            <div className='storyCont' >
            <img className='storyImg'  src={story.icon} alt="" />
            </div>
            <p className='storyUsername' >{story.username}</p>
        </div>
                )

        }).slice(0,7) :""}
        </div>
    
    </>)
}