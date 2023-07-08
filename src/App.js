import React, { Suspense, lazy } from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import './components/Animation.css';
import Slider from './components/slider'
import "./components/register/Form1.css"
import './components/explore/Navcss.css'
import './components/explore/secondpage/Sec.css';
import './components/explore/firstpage/First.css';
import Layout from './layout/layout';
import Company from './pages/companypage';
import Login from "./components/register/Login";

function App() {
  
  return (

    <div className="App">
      <Routes>
      <Route path='/Login' element={<Login/>}/>
        <Route element={<Layout/>}>
        <Route index element={<Slider/>}/>
        <Route path='/company' element={<Company/>}/>
        </Route>
      </Routes>
        
   </div>
  );
}

export default App;