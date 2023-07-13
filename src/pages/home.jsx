import React from "react";
import Card from "./card";
import Peic from "../assets/ads/photo_2023-04-29_02-43-32-removebg-preview (1).png";
import "./home1.css";
import Shik from "../assets/ads/b6f6273cc147e6e41ec0cc4c9ca14258.jpg";
const Home=()=>{
  return (
  
    <>
 

<div className="container">

<div className="text">
  <p>Have a beautiful  journey with us</p>
 
</div>
 <img src={Peic} alt="" />
</div>

  
    <p className="firsP">The best restaurant</p>
    <div>
        <Card/>
    </div>
    
    <div className="container2">
   
      <div className="cko8"> 
     <p>Have a 20% discount  for the first order from  shick shack</p>
       <button> Order now</button>
      </div>
       
       <img src={Shik} alt="" />
     
    </div>

  <p className="secP">Newly added</p>
    <div>
    <Card/>
    </div>
    
     
    </>
  );
  };




export default Home;