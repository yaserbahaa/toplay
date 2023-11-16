import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";




 
export default function Profile(props){
    const[user,setUser]= useState()
    const Navigate = useNavigate()
    const [imgUpload,setImgUpload]=useState('')   
    const [previewUploadImg,SetPreviewUploadImg] = useState('')    

    function handleUploadChagne(e){
        setImgUpload(e.target.files[0])
        if(e.target.files[0].type == "image/png" || e.target.files[0].type =="image/jpg" || e.target.files[0].type =="image/jpeg" || e.target.files[0].type =="image/gif"){
            SetPreviewUploadImg(URL.createObjectURL(e.target.files[0]))
        }
        else{
            console.log("user should upload img only");
        }
    }

    async function handleUpload(e){
        e.preventDefault()
        if(imgUpload){
            // props.setShow(false)
        }
        else{
            console.log("upload required");
        }    
        SetPreviewUploadImg("")
        setImgUpload("")
        try{
            const upload = new FormData()
            upload.append("file",imgUpload)
            upload.append("cloud_name","yaserbahaa")
            upload.append("upload_preset","zvqf7n1i")

            if(imgUpload.type =="image/png" || imgUpload.type =="image/jpg" || imgUpload.type =="image/jpeg" || imgUpload.type =="image/gif"|| imgUpload.type =="image/svg"){
            console.log("its image and upload is loading");
            try{
            const resp = await axios.post('https://api.cloudinary.com/v1_1/yaserbahaa/image/upload',upload)
            console.log(resp.data.url);
            const iconUrlStore = resp.data.url
            
            if(iconUrlStore){
            const resp = await axios.patch('http://localhost:3000/updateIcon',{iconUrl:iconUrlStore},{withCredentials:true})
            console.log("img have been store it in database")
            }   
            else{
            console.log("could not store img in database ");
            }
            }
            catch(err){
                console.log("could not upload img or store it in db " +err);
            }
            }
    else{
        console.log("img required to upload")
    }
    }
    catch(error){
        console.log("something worung "+error);   
    }
    }


    const logout = async()=>{
        try{
            const resp = await axios.post('http://localhost:3000/logout',{},{withCredentials: true,})
            console.log("logout sucsses");
            console.log(resp.status);    
            Navigate("/login")
        }
        catch{
            console.log("logout faild");
        }    
    }
    const resetScroll =()=>{
        document.body.style.overflow='auto'
        console.log("hehe");

    }
    resetScroll()
    useEffect(()=>{
    },[])
    
    return(<>
    <Navbar tokenData={props.tokenData}/>
    <div style={{marginTop:'58px'}}>
        <h1>profile compont</h1>
    <button onClick={logout}>logout</button>
    <form onSubmit={handleUpload} action="">
        <label>
            upload img
    <input type="file" onChange={handleUploadChagne}/>
        </label>
    {previewUploadImg ? <img src={previewUploadImg} alt="" /> : ""}
    <button>submit</button>
    </form>
    </div>
    </>)
}