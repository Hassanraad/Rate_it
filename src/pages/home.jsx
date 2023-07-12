import React from "react";
import Card from "./card";
import CardData from "./carddata";
import pic from "../assets/ads/CHIN.jpg";
import "./home1.css";
const Home=()=>{
  return (
  
    <>
 

<div className="container">

<div className="text">
  <p>Have a beautiful  journey with us</p>
 
</div>
 <img src={pic} alt="" />
</div>

  
    <p className="firsP">The best restaurant</p>
    <div className="home-cards">
       <Card details={CardData} />

    </div>
    
    <div className="container2">
   
      <div className="text"> 
     <p>Have a 20% discount  for the first order from  shick shack</p>
       <button> Order now</button>
      </div>
       
       <img src={pic2} alt="" />
     
    </div>

  <p className="secP">Newly added</p>
    <div className="home-cards">
       <Card details={CardData} />

    </div>
    
     
    </>
  );
  };




export default Home;