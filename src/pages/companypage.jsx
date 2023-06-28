import './companypage.css';
import React , { useState} from "react";
import user from '../assets/imgs/profile.png'
import Flotlist from '../components/rating';
import {FaStar}from'react-icons/fa';
export default function Company(){
    const [newitem,setitem]=useState();
    const [newrate,setrate]=useState(0);
    const [newcom,setcom]=useState([]);
    const{render,current,current1,current2,current3,current4}= Flotlist()
    function Add(){
     
             
            setcom(newitem);
        setitem("");
        setrate(Math.round((current+current1+current2+current3+current4)/5))        
    }

    return (
        <>
        <div className='layout'>
            <div className='ad00'>
            <div className='ad01'>
                <div className='ad02'>
                    <p className='par00'>Have a 20% discount for the first order from pizza Hut</p>
                    <a href="#" className='link'> <p className='par01'>Order now</p></a>
                </div>
            </div>
            </div>
            <div className='com00'>
                <h1 className='h00'>Comments</h1>
                <span className='sp00'>
                    <a href="#"  className='link01'><img src={user} alt=""  width={35} height={35} /></a>
                    <input type="text" placeholder='add comment'  className='inp00'  value={newitem} onChange={(e)=>setitem(e.target.value)} />
                    <span className='sp01'>
                        {render}
                    </span>
                    
                    <button className='but00' onClick={()=>Add()}>send</button>
                </span>
                <ul className='lis00'>
                    <li className='chlis00'>
                <span className='sp02'>
                <a href="#"><img src={user} alt="" width={35} height={35} /></a>
                <h2 className='h01'>name</h2>
                </span>
                <span><i> {[...Array(5)].map((star,i)=>{
                    const rating = i+1;
                    return(   
                     <label  className='star'> <input type= "radio" name="rating" value={rating}/><FaStar size={18}color={rating<= newrate?"#ffc107":"#e4e5e9"} /> </label>
                    )
               })}</i></span>
                <div className='com01'>
                    <p className='par03'> {newcom}  </p>
                </div>
                </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}
