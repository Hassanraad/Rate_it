
import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chif from "../../assets/imgs/Premium_Vector___Smiling_chef_cartoon_character-removebg-preview.png";
import  "./Login.css";
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase';
export default function Login  ()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const naviagte = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCreditals) => {
          const user = userCreditals.user;
          if (user.emailVerified) {
            console.log(user);
            localStorage.setItem('token', user.accessToken);
            naviagte('/company');
          } else {
            alert('you need to verify your email');
            sendEmailVerification(user);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    useEffect(()=>{
      if(localStorage.getItem("token")!==""){
        naviagte('/company');
      }
    },[])
    return (
<>
<div >
    <div  className="dv000">
    <div className="dv001">
        <img src={Chif} alt="" />
    </div>
    <form action="" onSubmit={handleSubmit} className="frm001">
        <div className="dv002">
            <h1 className="h1001">Welcome back!</h1>
        </div>
        <div className="dv002">
            <p className="p00000001">Here you can rate your meal & get a better experiment next time</p>
        </div>
        <label className="lbl000001"  > Email:</label>
        <input type="email" placeholder="Email" className="inpt00001" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label className="lbl000002" > Paasword:</label>
        <input type="text" placeholder="Paasword"  className="inpt00001"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className="dv003"><a href="#" className="a00001">Forget your password?</a></div>
        <div><button type='Submit' className="btn00002" >Continue</button></div>
        <div>
            <button className="btn00000">Facebook</button>
            <button  className="btn00001">Google</button>
        </div>
        <div> <a href="" className="a00002"> Create a new acouunt</a></div>
    </form>
    </div>
</div>

</>
    )
}