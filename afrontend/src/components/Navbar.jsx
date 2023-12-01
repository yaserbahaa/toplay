import "../css/Navbar.css"
import { useState } from 'react'
import icon from '../assets/icons8-ninja-80 (1).png'
import searchIcon from '../assets/icons8-search-50.png'
import { Routes,Route,Link, useNavigate } from 'react-router-dom'
import valoDefult from '../assets/icons8-valorant-100 (1).png'
import valo from '../assets/icons8-valorant-100 (2).png'
import lolDefult from '../assets/icons8-league-of-legends-100 (3).png'
import lol from '../assets/icons8-league-of-legends-100 (4).png'
import csgoDefult from '../assets/icons8-counter-strike-100.png'
import csgo from '../assets/icons8-counter-strike-100 (1).png'
import warzDefult from '../assets/icons8-call-of-duty-warzone-100 (2).png'
import warz from '../assets/icons8-call-of-duty-warzone-100 (3).png'
import chat from '../assets/icons8-chat-64 (1).png'
import profile from '../assets/icons8-user-64 (1).png'
import dev from '../assets/icons8-source-code-48.png'
import dis from '../assets/icons8-discord-48.png'
import menu from '../assets/icons8-menu-50.png'









export default function Navbar(props){
    const [showToplay,setShowToplay]=useState(false)
    const [valoToggle,setValoToggle]=useState(false)
    const [lolToggle,setLolToggle]=useState(false)
    const [csgoToggle,setCsgoToggle]=useState(false)
    const [warzToggle,setWarzToggle]=useState(false)
    const [test,setTest]=useState(true)


    const navigate = useNavigate()


    function toplay(){
        setShowToplay(true)
    }
    function toplayNone(){
        setShowToplay(false)
    }
    return(<>


    <div className="navbarNavbar" >
        

    <div className="iconCont" >

            <Link className="icon" to={"/"}>
        <img  src={icon} alt="" style={{width:"100%",height:"55px"}}/>
            </Link>

    <div className='search' >
        <form action=""> 
            <img className="navBarSearchIcon" src={searchIcon} style={{width:"14px",height:"14px",paddingRight:"6px",paddingTop:"4px",borderRadius:"6px",position:"absolute",right:"0px"}} alt="" />
        <input className="navBarSearch" type="search" placeholder='Search' style={{outline:"none",height:"21px",borderRadius:"5px",background:"rgb(63 63 63 / 94%)",border:"none" ,color:"white",paddingLeft:"8px"}}/>
        </form>
    </div>

    </div>

    <div className='navBarGamesCont' >


        <div  style={{position:"relative",width:"40px"}}>
    <Link to={'/valo'} >
        <img  className={props.routeColor == "valo" ? 'valoDefultDis':'valoDefult'} src={valoDefult} alt="" />
        <img className={props.routeColor == "valo" ? 'valo':'valoDis'} src={valo} alt="" />
    </Link>
        </div>
    
        <div style={{position:"relative",width:"40px"}}>
    <Link to={'/lol'}>
        <img className={props.routeColor == "lol" ? 'lolDefultDis':'lolDefult'} src={lolDefult} alt="" />
        <img className={props.routeColor == "lol" ? 'lol':'lolDis'} src={lol} alt="" />
    </Link>
        </div>



    <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
        <h3 className={props.routeColor == "all" ? "all" : "allDefult"}>All</h3>
    </Link>


        <div style={{position:"relative",width:"40px"}}>
    <Link to={'/csgo'}>
        <img className={props.routeColor == "csgo2" ? 'csgoDefultDis':'csgoDefult'} src={csgoDefult} alt="" />
        <img className={props.routeColor == "csgo2" ? 'csgo':'csgoDis'} src={csgo} alt="" />
    </Link>
        </div>


        <div style={{position:"relative",width:"40px"}}>
    <Link to={'/warz'}>
        <img className={props.routeColor == "warz" ? 'warzDefultDis':'warzDefult'} src={warzDefult} alt="" />
        <img className={props.routeColor == "warz" ? 'warz':'warzDis'} src={warz} alt="" />
    </Link>
        </div>

        </div>
        <div className="navbarProfileImgCont" >
                <div className="navbarChatImgNone">
                <Link className="navBarChatImg__" to={'/chat'}>
                <img style={{width:"100%",height:'50px',cursor:"pointer"}} src={chat} alt="" />
                </Link>
                </div>

                <div className="navbarProfileImgNone">
                 <Link className="navBarProfileImg__" to={'/profile'}>
                <img onClick={()=>{document.body.style.overflow='hidden auto'}} style={{width:"100%",height:'45px',borderRadius:"50%",cursor:"pointer"}} src={props.tokenData ? props.tokenData.icon : profile} alt="" />
                </Link>
                </div>

                <div style={{height:"100%",display:"flex",alignContent:"center",flexWrap:"wrap"}}>
                <img onClick={toplay} style={{width:"42px",height:"42px",cursor:"pointer"}} src={menu} alt="" />
                </div>
        </div>
        <div onClick={toplayNone} className={showToplay ? "showToplayBlur" : "dontShowToplay"}>

        </div>
        <div className={showToplay ? "showToplay" : "dontShowToplay"}>
                <h1 onClick={()=>{navigate("/")}} className="toplayTitle">toplay</h1>

                <a className="toplayDiscord" href="">
                {dis ? <img className="toplayDiscordImg" src={dis} alt="" /> : ""}
                <p className="toplayDiscordTitle">discord</p>
                </a>

                <Link className="toplayDeveloper" to={"/developer"}>
                {dev ? <img className="toplayDeveloperImg" src={dev} alt="" /> : ""}
                <p className="toplayDeveloperTitle">developer</p>
                </Link>
        </div>
    </div>
    


    </>)
}
// {    click outside close sidebar func
    // const [show,setShow]=useState(false)
    // const showRef = useRef()
    // const showRef2 = useRef()
    // useEffect(()=>{
        
        //     function closeSide (e){
            //         if(!showRef.current.contains(e.target) && !showRef2.current.contains(e.target)){
                //             setShow(false)
        //             // console.log(e)
        //         }
        //     }
        //     document.body.addEventListener('click',closeSide)
        //      return () => {document.body.removeEventListener('click',closeSide)}
        //     jsx
        //     <div>
        //         <button ref={showRef} onClick={()=>{setShow(!show)}}>all</button>
        //     </div>
        //      <div ref={showRef2} className={show ? 'show': 'dontShow'} >
        //         <AllGames/>
        //     </div> 
        // })
    // }