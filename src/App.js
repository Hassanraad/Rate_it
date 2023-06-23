import './App.css';
import Animation from './components/Animation';
import './components/Animation.css';
import React, { useState } from "react";

import { Login } from "./components/register/Login";
import { Register } from "./components/register/Register";
import "./components/register/Form1.css"

function App() {
  
  const [currentForm, setCurrentForm] = useState('Register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
   
    <div className="App">
      
      {
        currentForm === "Register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
      
      
      
      
    </div>

  );
}


export default App;