import React, { useState } from "react";
import {db} from '../../firebase/firebase' 
import background from './pizza.jpg';
import {addDoc,collection} from 'firebase/firestore';

export default function Register () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        // setRun(prev=>prev+1);
        try {
        await addDoc(collection(db, 'users'), {
        name , email , pass , 
        });
        } catch (err) {
        alert(err);
        }


    
    };

     return(
        <div className="div11">
        <h1 className="h001">SignUp to make<br />
             your meal <br />
             better</h1>
        <div className="divvv1">
          
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
            <p className="parg1">Rate it</p>
            <p className="parg2">Welcome</p>
            </div>
            <div className="div0012">
                <label className="l1">Name :</label> 
                
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="in1" placeholder=" Name" required />
                </div>
                <div  className="div0012">
                <label className="l2">Email :</label>
                
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="in2" placeholder=" Email" required />
                </div>
                <div  className="div0012">
                <label className="l3">Password:</label>
                
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="in3" placeholder=" Password" required />
                </div>
                <div className="div2">
                    <label className="a1">Do you have an account?</label>
                    <a href="#" className="a2">Login</a>
                </div>
                <div className="div0013">
                <button type="submit" className="in4"  > Continue  </button>
                <label className="l4">OR</label>
                    <div className="div3">
                        <input type="submit" value="Continue with Facebook" className="in5" />
                        <input type="submit" value="Continue with google" className="in6" />
                        </div>
                    </div>
                <div>
                

                </div>
            </form>
            
            

            
            </div>
        
        </div>
    );
}