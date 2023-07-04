import Layout from './layout/layout';
import Company from './pages/companypage.jsx';
import React, { Suspense, lazy } from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import './components/Animation.css';
import Slider from './components/slider'
import  Login  from "./components/register/Login";
import "./components/register/Form1.css"
import './components/explore/Navcss.css'
import './components/explore/secondpage/Sec.css';
import './components/explore/firstpage/First.css';
function App() {
  
  return (
   <div>
        <Routes>
                <Route element={<Layout />}>
                <Route index element={<Slider />} />
                <Route path='/Companypage' element={<Company />} />
              </Route>
        </Routes>
   </div>
  );
}


export default App;