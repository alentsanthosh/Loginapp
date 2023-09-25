import  React from "react"
import OtpInput from "otp-input-react"
import EmailIcon from '@mui/icons-material/Email';
import { Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react"
import {CgSpinner} from "react-icons/cg"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import {auth} from "./firebase.config"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import "./Otplogin.css"
import { Toaster, toast } from "react-hot-toast"
function Otplogin() {
const history = useNavigate(); 
const [otp,setOtp] = useState("")
const [loading,setLoading] = useState(false)
const [showotp,setShowotp] = useState(false)
const[user,setUser] = useState(null)
const[ph,setPh] = useState("")
function onCaptchVerify(){
    if(!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                onSignup()
            },
            'expired-callback': () => {},
          });
                
    }
}
function onSignup() {
setLoading(true)
onCaptchVerify()

const appVerifier = window.recaptchaVerifier
const formatPh =  '+' + ph
signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
           window.confirmationResult = confirmationResult;
            setLoading(false)
            setShowotp(true)
            toast.success('OTP sent successfully !')

    }).catch((error) => {
      console.log(error)
      setLoading(false)
    });

}
function onOTPverify () {

    setLoading(true)
    window.confirmationResult.confirm(otp).then (async(res)=>{

        console.log(res)
        setUser(res.user)
        setLoading(false)

    }).catch(err=>{
        console.log(err)
        setLoading(false)
    })
}
return( 
<div>
    <Toaster toastOptions={{duration : 4000}}/>
    <div id ="recaptcha-container"></div>
    {
        user ?(
            ///<h2>Login success</h2>
            history("/home")
        ) : (
            
<section>
{
    showotp ?
<>
        <div className="Firstt">
            <form className="formm">
            <h2>Welcome to Otplogin</h2>
            <h5 >Enter your otp</h5>
            <OtpInput OTPLength ={6}
            value={otp}
            onChange ={setOtp}
            otpType="number"
            autoFocus
            disabled ={false}
            >
            </OtpInput>
            <br/>
            <Button className="buttonnn" variant="contained" onClick={onOTPverify}>
                {
                    loading&&<CgSpinner size = {30}/>
                }
                 <span>Verify OTP</span></Button>
                 </form>
        </div>
        </> :
        
        <>

        <div className="First">
            <form className="new">
                <div className="icon8"><EmailIcon/></div>
            <h2 className="topp">Welcome to Otplogin</h2>
            <h5 className ="top">Verify your number </h5>
           <div  className="PhoneInput"> <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput></div>
            <br/>
            <Button variant = "contained" className="buttonn"  onClick={onSignup}>
                {
                    loading&&<CgSpinner size = {30}/>
                }
                <span>Send code via SMS </span></Button>
                </form>
        </div>

        </>
}
</section>
)}
    

        </div>
        
    )
}
export default Otplogin;