import React from "react";
import "./footer.css";
import facebook from "../assets/imgs/facebook.png"
import insta from "../assets/imgs/instagram.png"
import Twitter from "../assets/imgs/twitter.png"

export default function Footer() {
    return(<>
    <div className="footer">
       
        <footer>

<div className="s01">
    <p className="p1">More about company</p>
    <p className="p2">Makers masarat Graduation project</p>
</div>
<div className="s02" >
<h1 className="logo">Rate it</h1>
    <span className="s04">Social media</span>
    <span className="span1"><img src={facebook} alt="" width={24} height={24} /><a href="#" className="a1">Facebook</a></span>
    <span className="span1"><img src={insta} alt="" width={24} height={24} /><a href="#"className="a1">Instgram</a></span>
    <span className="span1" ><img src={Twitter} alt="" width={24} height={24} /><a href="#"className="a1">Twitter</a></span>
</div>
<div className="s03"> 
    <span><img src="" alt="" /><span>AL makers</span></span>
    <span><img src="" alt="" /><span>projact@gamil.com</span></span>
    <span><img src="" alt="" /><span>07728167699</span></span>
</div>
</footer>
    </div>
    
    </>)
}