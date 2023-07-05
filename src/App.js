import Animation from './components/Animation';
import First from './components/explore/firstpage/First';
import Sec from './components/explore/secondpage/Sec';
import Navbar from './layout/Navbar';
import Register from './components/register/Register';
import React, { Suspense, lazy } from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import './components/Animation.css';
import Slider from './components/slider'
import  Login  from "./components/register/Login";
import "./components/register/Form1.css"
import './components/explore/Navcss.css'
import './components/explore/secondpage/Sec.css';
import './components/explore/firstpage/First.css';


import Layout from './layout/footer';
import Company from './pages/companypage';

function App() {
  
  return (

    <div className="App">
      <Navbar />
      
    

   </div>
  );
}

export default App;