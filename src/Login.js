import { useState } from "react";
import axios from "axios";
import "./Login.css"
import { useNavigate,Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
function Login() {
    const history = useNavigate(); 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const otpPage = ()=> {
        history("/otplogin")
    }
    async  function submit (e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{email,password})
        .then(res => {
            if(res.data==="exist"){
                history("/home")
            }
            else if (res.data==="notexist")
            {
            alert("user not found")
            } })
            
        .catch(e=> {
            alert("wrong details")
            console.log(e)
        })
    }
    catch(e){
        console.log(e)
    }
    }
return(
<div className="Section">
<form action = "POST" className="Form">
    <div className="lock"><LockIcon/></div>
    <div className ="inputs"><h2>Login</h2></div>
    <div className="icon"><EmailIcon/></div>
    <div className="input4">
<input type ="text" onChange= {(e) =>{setEmail(e.target.value)}} className="input1" placeholder="Email"></input></div>
<div className="input5"><div className="icon22"><KeyIcon/></div>
<input type ="password" onChange = { (e) => {setPassword(e.target.value)}} className="input1" placeholder="Password"></input>
</div>
<br/>
<Button  variant = "contained"className="Button" onClick={submit}>Login</Button>
<br/>
<div className="loginotp">
<Button className="Button1" onClick={otpPage}>Login with otp</Button></div>
<br/>
<div className="signup">Not a member? <a href="/signup"> Signup</a></div>
</form>
</div>
)
}
export default Login;
