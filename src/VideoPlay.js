import {useState, useRef, useEffect} from "react";
import { Route, Routes,BrowserRouter as Router, useParams } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import config from './config.json';
import axios from 'axios';
import 'shaka-player/dist/controls.css';

const VideoPlay = (props) =>{
    const { videoId } = useParams();
    let filename = videoId+"/h264.mpd";
    let sessionStorage = window.sessionStorage;
    const SERVER_ADDRESS = config.SERVER_ADDRESS;
    const [drmKey, setDrmKey] = useState(null); 

    useEffect(() => {
        
        axios.get(SERVER_ADDRESS+"/keys/"+videoId,{
            headers:{
                Authorization: sessionStorage.getItem("authToken")
            }
        }).then((response)=>{
            setDrmKey(response.data);            
        })
        }, []);
    
    if(drmKey==null){
        return <div>Loading...</div>
    }
    return (
        <ShakaPlayer src={SERVER_ADDRESS+"/videos/dash/"+filename} config={{
            drm:{
                clearKeys: drmKey
            }
        }}/>
    )
}

export default VideoPlay;