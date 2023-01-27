import { Route, Routes,BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './MainMenu.css'
const MainMenu = (props) =>{
    const {videoId, title, thumbnail, uploader, uploadedDate} = props;
    const navigate = useNavigate();
    const uploadClick =()=> {
        navigate("/upload/");
    }
    const showClick =()=> {
        navigate("/videos/");
    }

    return (
        <>
            <div className="mainMenu">
                <button onClick={()=>{showClick()}}> 비디오 조회 </button>
                <button onClick={()=>{uploadClick()}}> 비디오 업로드 </button>
            </div>
        </>
    )
}

export default MainMenu;