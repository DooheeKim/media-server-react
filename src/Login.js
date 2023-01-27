import {useState, useLocation} from 'react';
import axios from 'axios';
import './Login.css';
import config from './config.json';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const SERVER_ADDRESS = config.SERVER_ADDRESS;
    let sessionStorage = window.sessionStorage;

    const submitLogin = (e) =>{
        e.preventDefault();
        axios.post(SERVER_ADDRESS+"/users/login", {
            "username": id,
            "password": password
        })
        .then((response)=>{
            sessionStorage.setItem("authToken", "Bearer "+response.data.token);
            navigate("/main/");
        })
        .catch((response)=>console.log("Failed to login"))
    }

    return (
        <form className="Login" onSubmit={(e)=>submitLogin(e)}>
            <div>
                <input type="text" placeholder="아이디" onChange={(e)=>setId(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="비밀번호" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">로그인</button>
        </form>
    );
}

export default Login;
