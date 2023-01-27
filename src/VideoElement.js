import { Route, Routes,BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './Video.css'
const VideoElement = (props) =>{
    const {videoId, title, thumbnail, uploader, uploadedDate} = props;
    const navigate = useNavigate();
    const videoClick =()=>{
        navigate("/videos/"+videoId);
    }

    return (
        <>
            {/* <Routes>
                <Route path="/videos/:videoId" element={VideoPlay}/>
            </Routes> */}
            <div className="videoElement" onClick={()=>videoClick()}>
                <img src={`data:image/jpeg;base64,${thumbnail}`} />
                <div className="videoTitle">{title}</div>
                <div className="uploader">{uploader}</div>
                <div className="uploadedDate">{uploadedDate}</div>
            </div>
        </>
    )
}

export default VideoElement;