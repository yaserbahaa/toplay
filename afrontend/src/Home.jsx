import BSideBar from "./components/BSideBar.jsx";
import ASideBar from "./components/ASideBar.jsx";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Content from "./components/Content.jsx";
import axios from 'axios'
import { useEffect, useState, } from "react";
import { Route, Routes,useNavigate } from 'react-router-dom'







export default function Home(props){
    const navigate = useNavigate()    

    useEffect(()=>{
        props.setRouteColor("all")
    },[])
    return(<>
        <Navbar tokenData={props.tokenData} routeColor={props.routeColor}/>
        <Stories data={props.data.stories}/>
        <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
        <ASideBar tokenData={props.tokenData} data={props.data}/>
        <Content data={props.data}/>
        <BSideBar friendsData={props.friendsData}/>
        </div> 

    </>)
}