import React from "react";
import "./footer.css";
import facebook from "../assets/imgs/facebook.png"
import insta from "../assets/imgs/instagram.png"
import Twitter from "../assets/imgs/twitter.png"

export default function Footer() {
    return(<>
    <div className="footer">
    <h1 className="logo1">Rate it</h1>

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
    <span className="s05">Contact us</span>
    <span className="span2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor"
   stroke-linecap="round" 
   stroke-linejoin="round" 
   stroke-width="1.5"
    d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"></path>
  <circle cx="12" cy="11" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
</svg>

<span  className="span3">AL makers</span></span>
    <span className="span2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 6.5L12 12.25L18.5 6.5"></path>
</svg>
<span className="span3">projact@gamil.com</span></span>
    <span className="span2"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" 
  stroke-linecap="round" 
  stroke-linejoin="round"
   stroke-width="1.5" 
  d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"></path>
</svg><span  className="span3" > 07728167699</span></span>
</div>
</footer>
    </div>
    
    </>)
}