import {useState, useEffect, useLocation, useNavigate} from 'react';
import axios from 'axios';
import config from './config.json';
import './Video.css';

function VideoUpload() {
    const SERVER_ADDRESS = config.SERVER_ADDRESS;
    let sessionStorage = window.sessionStorage;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const [uploadFlag, setUploadFlag] = useState(0);
    const form = new FormData();

    const submitVideo = (e) =>{
        e.preventDefault();
        let json = JSON.stringify({
            "title":title,
            "description": description,
            "exposure": "public"
        });
        let blob = new Blob([json], {type: 'application/json'});
        form.append("body", blob);
        form.append("video", selectedVideo);
        form.append("thumbnail", selectedImage);
        axios.post(SERVER_ADDRESS+"/videos/", form, 
        {
            headers:{
                Authorization: sessionStorage.getItem("authToken"),
                "Content-Type": "multipart/form-data",
                'Accept': 'application/json, application/xml, text/plain, text/html, */*',
            }
        })
        .then((response)=>{
            setUploadFlag(1);
        })
        .catch((response)=>{
            setUploadFlag(-1);
        })
    }
    useEffect(()=>{

    }, [uploadFlag])

    if(uploadFlag == 0){
        return(
            <div className="videoUploadContainer">
                <form onSubmit={submitVideo}>
                    <div>동영상 
                        <input type="file"
                        onChange={(e) => setSelectedVideo(e.target.files[0])}/>
                    </div>
                    <div>썸네일
                        <input type="file"
                        onChange={(e) => setSelectedImage(e.target.files[0])}/>
                    </div>
                    <div>
                        <input type="text" placeholder="제목"
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="영상 설명"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button type="submit">업로드</button>
                </form>
            </div>
        )
    }
    else if(uploadFlag == 1){
        return (
        <div>
            <h3>업로드가 완료되었습니다.</h3>
            <h6>영상은 인코딩 후 표시됩니다(최대 한시간 소요)</h6>
        </div>
        )
    }else{ // uploadFlag == -1
        return <h1>업로드에 실패하였습니다.</h1>
    }
}

export default VideoUpload;
