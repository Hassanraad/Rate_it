import React from "react";
import "./footer.css";
import facebook from "./imgs/facebook (1).png";
import insta from "./imgs/instagram.png";
import Twitter from "./imgs/twitter.png"
import phone  from "./imgs/telephone.png"
import mail  from  "./imgs/mail.png"
import loc  from  "./imgs/location.png"


export default function Footer() {
    return(<>
    <div className="footer">
    <h1 className="logo1">Rate it</h1>

        <footer>

<div className="s01">
    <p className="parag1">More about company</p>
    <p className="parag2">Makers masarat Graduation project</p>
</div>
<div className="s02" >
<h1 className="logo">Rate it</h1>
    <span className="s04">Social media</span>
    <span className="span1"><img src={facebook} alt="" width={24} height={24} /><a href="#" className="a1">Facebook</a></span>
    <span className="span1"><img src={insta} alt="" width={24} height={24} /><a href="#"className="a1">Instgram</a></span>
    <span className="span1" ><img src={Twitter} alt="" width={24} height={24} /><a href="#"className="a1">Twitter</a></span>
</div>
<div className="s03"> 
    <span className="s05">Contact us</span>
    <span className="span2"> <img src={loc} alt="" />
<span  className="span3">AL makers</span></span>
    <span className="span2"><img src={mail} alt="" />
<span className="span3">projact@gamil.com</span></span>
    <span className="span2"><img src={phone} alt="" /> <span  className="span3" > 07728167699</span></span>
</div>
</footer>
    </div>
    
    </>
    )
}