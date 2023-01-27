import axios from "axios";
import {useState, useEffect} from "react";
import config from './config.json';
import VideoElement from "./VideoElement";
import './Video.css'

const VideoList = () =>{
    const SERVER_ADDRESS = config.SERVER_ADDRESS;
    const [videoList, setVideoList] = useState([]);
    let sessionStorage = window.sessionStorage;

    useEffect(()=>{
        axios.get(SERVER_ADDRESS+"/videos/",{
            headers:{
                Authorization: sessionStorage.getItem("authToken")
            }
        }).then((response)=>{
            setVideoList(response.data.content);
        })
    }, [])

    if(videoList.length==0){
        return <div>Loading...</div>
    }
    
    
    return (
        <div className="videoListContainer">
            {videoList.map((item,idx)=>{
                return <VideoElement key={idx}
                videoId={item.videoId}
                title={item.title}
                thumbnail={item.thumbnail}
                uploader={item.uploader}
                uploadedDate={item.uploadedDate}/>
            })}
        </div>
            
        
    )
}

export default VideoList;