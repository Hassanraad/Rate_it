import './app.css';
import Animation from './components/Animation';
import './components/Animation.css';
import React, { useState } from "react";

import  Login  from "./components/register/Login";
import Register  from "./components/register/Register";
import "./components/register/Form1.css"

import Navbar from'./components/explore/Navbar';
import './components/explore/Navcss.css'
import Sec from'./components/explore/secondpage/Sec';
import './components/explore/secondpage/Sec.css';
import First from './components/explore/firstpage/First';
import './components/explore/firstpage/First.css';


import'./app.css';
import Layout from './layout/footer';
import Company from './pages/companypage';

function App() {
  
  return (

    <div className="App">
      <Navbar />
      <First />
      <Sec />
      <Animation />
      <Register />
    </div>

   
  );
}


export default App;