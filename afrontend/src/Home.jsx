import BSideBar from "./components/BSideBar.jsx";
import ASideBar from "./components/ASideBar.jsx";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";
import Content from "./components/Content.jsx";
import axios from 'axios'
import { useEffect, useState, } from "react";
import { Route, Routes,useNavigate } from 'react-router-dom'







export default function Home(props){
    const navigate = useNavigate()    
    return(<>
        <Navbar tokenData={props.tokenData}/>
        <Stores data={props.data}/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <ASideBar data={props.data}/>
        <Content data={props.data}/>
        <BSideBar data={props.data}/>
        </div> 
        
    </>)
}