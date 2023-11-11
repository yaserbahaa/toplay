import profile from '../assets/icons8-user-64 (1).png'


 

export default function Stores(props){
    const stories = props.data 
    console.log(stories);
    

    return(<>
        <div style={{display:"flex",alignContent:"center",flexWrap:"wrap",height:'85px',justifyContent:"center",margin:'75px 0px 20px 0px',gap:"23px"}}>
        {stories ? stories.map((story)=>{
            return(
        <div key={story._id} style={{display:"flex",flexDirection:"column",height:"70px",cursor:"pointer"}}>
            <div style={{display:"flex",alignContent:"center",flexWrap:"wrap",justifyContent:"center",width:'50px',height:"50px",border:"1px solid rgb(89 91 93)",borderRadius:"50%"}}>
            <img style={{width:'50px',borderRadius:"50%"}} src={story.icon} alt="" />
            </div>
            <p style={{fontSize:"14px",margin:"0px",paddingLeft:"10px",paddingTop:'3px',color:"white"}}>{story.username}</p>
        </div>
                )

        }).slice(0,7) :""}
        </div>
    
    </>)
}