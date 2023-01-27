import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import VideoList from './VidoeList.js'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'
import VideoPlay from "./VideoPlay.js"
import VideoUpload from './VideoUpload.js';
import { Suspense } from 'react';
import MainMenu from './MainMenu';
function App() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/" element={<MainMenu />} />
          <Route path="/upload/" element={<VideoUpload/>} />
          <Route path="/videos/" element={<VideoList/>} />
          <Route path="/videos/:videoId" element={<VideoPlay />}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
