import './App.css';
import Animation from './components/Animation';
import './components/Animation.css';
import React, { useState } from "react";

import  Login  from "./components/register/Login";
import Register  from "./components/register/Register";
import "./components/register/Form1.css"

function App() {
  
  

  return (
   
    <div className="App">
      

      <Animation />
      <Register />
      
    </div>

  );
}


export default App;