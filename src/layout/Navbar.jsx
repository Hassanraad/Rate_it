import { useNavigate } from 'react-router-dom';
import Search from'../assets/imgs/search-interface-symbol.png';
import { useState,useEffect } from 'react';

export default function Navbar(){
    const [yas,setyas]=useState("no")

    const navigate=useNavigate()
    function Move1() {
        navigate('/login')
    }
    function Move2() {
        navigate('/')
    }
    useEffect(()=>{
        if(localStorage.getItem("name")!==null){
            setyas("yas")
        }
    },[])
    return (
        <div>
        <div className="nav">
            <div>
            <p className="parag123">Rate it</p>
            </div>
            <div className='div0001'>
            <a href="/home" className="home">Home</a>
            <a href="" className="service">Service</a>
            <a href="" className="about">About</a>
            <a href="" className="content">Content</a>
            </div>
            <div>
                <label className='lbl001'>
                        <input type="text" placeholder='Search' className='in0001'/>
                        <img src={Search} alt=""width={20} height={20} className='img0001' />
                </label>
            </div>
            <div className='div0002'>
                <img src={localStorage.getItem("img")} alt="" width={40} height={40} className={`imgbcs${yas}`} />
            <button className={`btn1${yas}`} onClick={Move1}>Sign in</button>
            <button className={`btn2${yas}`} onClick={Move2}>Sign up</button>
            </div>
        </div>
       </div>

    );

}