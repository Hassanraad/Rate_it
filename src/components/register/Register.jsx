import { createUserWithEmailAndPassword,sendEmailVerification ,updateProfile} from "firebase/auth";
import React, { useState,useEffect } from "react";
import auth, { db, Signinwithgoogle } from "../../firebase/firebase";
import { useNavigate } from 'react-router-dom';

   const token = localStorage.getItem('token');
export default function Register () {
 const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [loding,setloding]=useState(false)
    const naviagte = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, pass)
          .then(async (userCreditals) => {

            const user = userCreditals.user;
            await updateProfile(user,{
                displayName:name
            })
            sendEmailVerification(user);
            console.log(user)
            alert('we sent u email please verify ur email address');
            naviagte('/login');
          })
          .catch((error) => {
            console.log(error.message);
          });
          
        setloding(false);
    }
 function Go() {
    Signinwithgoogle()
    setloding(true);
}
useEffect(()=>{
    if (localStorage.getItem("name")!==null) {
        naviagte('/home')
    }
    setloding(false);
},[loding])
     return (
        <div className="div11">
        <h1 className="h0001">SignUp to make<br />
             your meal <br />
             better</h1>
        <div className="divvv1">
          
            <div className="register-form">
                <div>
            <p className="parg1">Rate it</p>
            <p className="parg2">Welcome</p>
            </div>
            <div className="div0012">
                <label className="l1">Name :</label> 
                
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="in1" placeholder=" Name"  />
                </div>
                <div  className="div0012">
                <label className="l2">Email :</label>
                
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="in2" placeholder=" Email"  />
                </div>
                <div  className="div0012">
                <label className="l3">Password:</label>
                
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="in3" placeholder=" Password"  />
                </div>
                <div className="div2">
                    <label className="a1">Do you have an account?</label>
                    <a href="#" className="a2">Login</a>
                </div>
                <div className="div0013">
                <button type="submit" className="in4" disabled={loding}  onClick={handleSubmit} > Continue  </button>
                <label className="l4">OR</label>
                    <div className="div3">
                        <input type="submit" value="Continue with Facebook" className="in5" disabled={loding} />
                        <input type="submit" value="Continue with google" className="in6" onClick={Go}  />
                        </div>
                    </div>
                <div>
                

                </div>
            </div>
            
            

            
            </div>
        
        </div>
    );
}