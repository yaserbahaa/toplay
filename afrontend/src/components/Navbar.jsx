import { useState } from 'react'
import icon from '../assets/icons8-ninja-80 (1).png'
import searchIcon from '../assets/icons8-search-50.png'
import { Routes,Route,Link } from 'react-router-dom'
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






export default function Navbar(){
    const [valoToggle,setValoToggle]=useState(false)
    const [lolToggle,setLolToggle]=useState(false)
    const [csgoToggle,setCsgoToggle]=useState(false)
    const [warzToggle,setWarzToggle]=useState(false)
    
    return(<>
    {/* navbar routes */}

    <Routes>
        {/* <Route path={'/valo'} element={<Valo/>}/>
        <Route path={'/lol'} element={<Lol/>}/>
        <Route path={'/all'} element={<All/>}/>
        <Route path={'/csgo'} element={<Csgo/>}/>
        <Route path={'/warz'} element={<Warz/>}/> */}
        {/* <Route path={'/chat'} element={<Chat/>}/> */} 
        {/* <Route path={'/profile'} element={<Profile/>}/> */}
    </Routes>
    <div className="navBar" style={{position:"fixed",top:'0px',left:'0px',padding :"0px",margin:"0px", width:"100%", height:"56px",display:"flex",alignContent:"center",backgroundColor:"#242526",borderBottom: "1px solid #333333",flexWrap: "wrap"}}>
        
    <div style={{display:"flex",gap:"10px",alignContent:"center",flexWrap:"wrap",height:"56px"}}>
    <div className="icon" style={{}}>
        <Link to={'/'}>
        <img src={icon} alt="" style={{width:"50px",height:"50px",marginLeft:"23px",marginTop:"13px",cursor:"pointer"}}/>
        </Link>
    </div>
    <div className='search' style={{marginTop:"28px",marginBottom:"28px",position:"relative"}}>
        <form action=""> 
            <img src={searchIcon} style={{width:"14px",height:"14px",paddingRight:"6px",paddingTop:"4px",borderRadius:"6px",position:"absolute",right:"0px"}} alt="" />
        <input type="search" placeholder='Search' style={{outline:"none",height:"21px",borderRadius:"5px",background:"rgb(63 63 63 / 94%)",border:"none" ,color:"white",paddingLeft:"8px"}}/>
        </form>
    </div>

    </div>

    <div style={{display:"flex",position:"absolute",top:'50%',left:"50%", transform: "translate(-50%,-50%)",gap:"75px" ,color:"white"}}>


        <div style={{position:"relative",width:"40px"}}>
    {/* <Link to={'/valo'}> */}
        <img onClick={()=>{ setValoToggle(!valoToggle); setLolToggle(false); setCsgoToggle(false); setWarzToggle(false);}} className={valoToggle ? 'valoDefultDis':'valoDefult'} src={valoDefult} alt="" />
        <img className={valoToggle ? 'valo':'valoDis'} src={valo} alt="" />
    {/* </Link> */}
        </div>
    
        <div style={{position:"relative",width:"40px"}}>
    {/* <Link to={'/lol'}> */}
        <img onClick={()=>{setLolToggle(!lolToggle); setValoToggle(false); setCsgoToggle(false); setWarzToggle(false);}} className={lolToggle ? 'lolDefultDis':'lolDefult'} src={lolDefult} alt="" />
        <img className={lolToggle ? 'lol':'lolDis'} src={lol} alt="" />
    {/* </Link> */}
        </div>



        <div>
    {/* <Link to={'/all'}> */}
        <h3>all</h3>
    {/* </Link> */}
        </div>


        <div style={{position:"relative",width:"40px"}}>
    {/* <Link to={'/csgo'}> */}
        <img onClick={()=>{setCsgoToggle(!csgoToggle); setValoToggle(false); setLolToggle(false); setWarzToggle(false);}} className={csgoToggle ? 'csgoDefultDis':'csgoDefult'} src={csgoDefult} alt="" />
        <img className={csgoToggle ? 'csgo':'csgoDis'} src={csgo} alt="" />
    {/* </Link> */}
        </div>


        <div style={{position:"relative",width:"40px"}}>
    {/* <Link to={'/warz'}> */}
        <img onClick={()=>{setWarzToggle(!warzToggle); setLolToggle(false); setCsgoToggle(false); setValoToggle(false);}} className={warzToggle ? 'warzDefultDis':'warzDefult'} src={warzDefult} alt="" />
        <img className={warzToggle ? 'warz':'warzDis'} src={warz} alt="" />
    {/* </Link> */}
        </div>

        </div>
        <div style={{position:"absolute",right:"23px"}}>
        <div style={{display:"flex",gap:"25px",height:"56px",alignContent:"center",flexWrap:"wrap"}}>
                {/* <Link to={'/chat'}> */}
                <img style={{width:"37px",cursor:"pointer"}} src={chat} alt="" />
                    {/* </Link> */}

                 <Link to={'/profile'}>

                <img style={{width:"37px",cursor:"pointer"}} src={profile} alt="" />
                </Link>

        </div>
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