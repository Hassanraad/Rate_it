import React, { useState } from "react";
import Chif from "../../assets/imgs/Premium_Vector___Smiling_chef_cartoon_character-removebg-preview.png";
import  "./Login.css";
export default function Login  ()  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
<>
<div >
    <div  className="dv000">
    <div className="dv001">
        <img src={Chif} alt="" />
    </div>
    <form action="" className="frm001">
        <div className="dv002">
            <h1 className="h1001">Welcome back!</h1>
        </div>
        <div className="dv002">
            <p className="p00000001">Here you can rate your meal & get a better experiment next time</p>
        </div>
        <label className="lbl000001" > Email:</label>
        <input type="text" placeholder="Email" className="inpt00001" />
        <label className="lbl000002" > Paasword:</label>
        <input type="text" placeholder="Paasword"  className="inpt00001" />
        <div className="dv003"><a href="#" className="a00001">Forget your password?</a></div>
        <div><button  className="btn00002">Continue</button></div>
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