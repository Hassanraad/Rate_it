import React, { Suspense, lazy } from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './components/Animation.css';
import Slider from './components/slider'
import "./components/register/Form1.css"
import './components/explore/Navcss.css'
import './components/explore/secondpage/Sec.css';
import './components/explore/firstpage/First.css';
import Layout from './layout/layout';
import Company from './pages/companypage';

function App() {
  
  return (
  <Register>
    <Router>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Signin' element={<Signin />} /> 
        <Route path='/update-profile' element={<update-profile />} /> 

      </Routes>
    </Router>
    
  </Register>
  );
}

export default App;