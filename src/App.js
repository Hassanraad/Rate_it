import React, { Suspense, lazy } from 'react';
import { Route, Routes,Router } from 'react-router-dom';
import './components/Animation.css';
import Slider from './components/slider'
import "./components/register/Form1.css"
import './components/explore/Navcss.css'
import './components/explore/secondpage/Sec.css';
import './components/explore/firstpage/First.css';
<<<<<<< HEAD
import Layout from './layout/layout';
=======
import Footer from './layout/footer';


import Layout from './layout/footer';
>>>>>>> b1c7a8cced7e839c88ace9169b3d70c0950dcd14
import Company from './pages/companypage';

function App() {
  
  return (

    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route element={<Layout/>}>
        <Route index element={<Slider/>}/>
        <Route path='/company' element={<Company/>}/>
        </Route>
      </Routes>
=======
      <Navbar />
      
      <Animation />
      
      <Register />
      <Footer />
      <Navbar/>
      <First />
     <Sec/> 
       <Register/>
      <Layout/>
   
>>>>>>> b1c7a8cced7e839c88ace9169b3d70c0950dcd14
   </div>
  );
}

export default App;