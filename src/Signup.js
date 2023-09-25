import "./signup.css"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

function Signup(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const history =  useNavigate()

async function submit(e){
e.preventDefault();
try{
    await axios.post("http://localhost:8000/signup",{email,password})
    .then(res=>{
        if(res.data==="exist"){
        alert("user already exists")
        }
        else if(res.data==="notexist"){
       history("/home")
    
        }
    })
    .catch(e =>{
        alert("error happend")
        console.log(e);
    })
    }
catch(e){
    console.log(e)
}
}

 return(
        <div className="Section">
<form  action ="POST" className="Form">
    <div className="lockicon"><LockIcon/></div>
    <div className="input1"><h2>Signup</h2></div>
    <div className="input2"><div className="icon1"><EmailIcon/></div>
<input type ="email" onChange ={ (e) =>{setEmail(e.target.value)}} className="input1" placeholder="Email"/></div>
<div className="input3"><div className="icon2"><KeyIcon/></div>
<input type ="password" onChange= { (e) =>{setPassword(e.target.value)}} className="input1" placeholder="Password"/></div>
<br/>
<Button className="Button" variant="contained" onClick={submit}>Signup</Button>
<br/>
<div className="link">Alredy have an account? <a href="/">Login</a></div>
</form>
</div>
    )
}
export default Signup;