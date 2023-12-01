import profile from '../assets/icons8-user-64 (1).png'
import "../css/BSideBar.css"
import { useNavigate } from 'react-router-dom';




export default function BSideBar(props){
    const friendsData = props.friendsData
    const navigate = useNavigate()
    function userProfile(e){
        const friendId = e.target.getAttribute("data-friendid")
        // console.log(friendId);
        navigate(`/profile/id/${friendId}`)
        }
    return(<>
            <div className='BSideBar' >
                <div className='bSideBarTilteParent'>
                    <p className='bSideBarTilte'>Your Friends</p>
                </div>
            {friendsData ? friendsData.map((friend)=>{
                return(
            <div key={friend._id} style={{display:"flex",alignContent:"center",flexWrap:"wrap", marginBottom:"10px" }}>
            <div className='bSideBarImgCont'>
                <img className='bSideBarImg' src={friend.friendIcon} data-friendid={friend.friendId} onClick={userProfile} alt="" />
            </div>
            <div className='bSideBarUsernameCont'>
            <p data-friendid={friend.friendId} onClick={userProfile} style={{fontSize:"12px",fontWeight:'900',color:"white",marginLeft:"10px",cursor:"pointer"}}>{friend.friendUsername}</p>
            </div>
            </div>
                    )
            }) : ""}

            
        </div>

    </>)
}