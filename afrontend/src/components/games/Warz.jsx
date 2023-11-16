import { useEffect, useState } from "react";
import ASideBar from "../ASideBar.jsx";
import BSideBar from "../BSideBar.jsx";
import Content from "../Content.jsx";
import Navbar from "../Navbar.jsx";
import Stories from "../Stories.jsx";
import axios from "axios";



export default function Warz(props){
    const [data,setData]=useState('')

    useEffect(()=>{
        const getData = async() =>{
            try{
                const resp = await axios.get('http://localhost:3000/dataWarz',{withCredentials: true,})
                setData(resp.data)
                console.log("post&story data has been resived");
            }
            catch{
                console.log("could not get user data");
            }
        }
        getData()
        props.setRouteColor("warz")

    },[])
    return(<>
            <Navbar tokenData={props.tokenData} routeColor={props.routeColor}/>
            <Stories data={props.data.stories}/>
            <div style={{display:"flex",justifyContent:"center"}}>
            <ASideBar tokenData={props.tokenData} data={props.data}/>
            <Content data={data}/>
            <BSideBar friendsData={props.friendsData}/>
            </div> 
        </>)
}