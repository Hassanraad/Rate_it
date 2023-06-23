import React, { useState } from "react";

import background from './pizza.jpg';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

     return(
        <div >
        <img src={background} className='background'/>
        <h1>SignUp to make<br />
             your meal <br />
             better</h1>
        <div className="div1">
            <p className="p1">Rate it</p>
            <p className="p2">Welcome</p>
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="l1">Name :</label> 
                
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="in1" placeholder=" Name" required />
                
                <label className="l2">Email :</label>
                
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="in2" placeholder=" Email" required />
                
                <label className="l3">Password</label>
                
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="in3" placeholder=" Password" required />
                
                <div className="div2">
                    <label className="a1">Do you have an account?</label>
                    <a onClick={() => props.onFormSwitch('login')} className="a2">Login</a>
                </div>
                <button type="submit" className="in4"  > Register  </button>
                <label className="l4">OR</label>
                    <div className="div3">
                        <input type="submit" onClick={() => props.onFormSwitch('login')} value="Login here " className="in5" />
                        <input type="submit" value="Continue with google" className="in6" />
                    </div>
                <div>
                

                </div>
            </form>
            
            

            
            </div>
        
        </div>
    );
}