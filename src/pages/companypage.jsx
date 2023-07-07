import './companypage.css';
import React , { useEffect, useState} from "react";
import user from '../assets/imgs/profile.png'
import Flotlist from '../components/rating';
import {FaStar}from'react-icons/fa';

import {db} from '../firebase/firebase';
import {addDoc,collection} from 'firebase/firestore';

export default function Company(){
    const [newitem,setitem]=useState();
    const [newcom,setcom]=useState([]);
    const{render,current,current1,current2,current3,current4}= Flotlist()
    const [newstar,setstar]=useState()
    const total = Math.round((current+current1+current2+current3+current4)/5)
    const Add=()=>{
            setcom(newitem);
        setitem("");
        setstar( [...Array(5)].map((star,i)=>{
            const rating = i+1;
            return(   
             <label  className='star'> <input type= "radio" disabled name="rating" value={rating}/><FaStar size={18}color={rating<= total?"#ffc107":"#e4e5e9"} /> </label>
            )
       }) )
    }

    useEffect(()=>{ 
        console.log("change")
        console.log (`${current} ${current1} ${current2} ${current4} ${current3} ${total}`)
},[current,current1,current2,current3,current4,total])
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // setRun(prev=>prev+1);
    try {
    await addDoc(collection(db, 'comments'), {
     newcom , 
    });
    } catch (err) {
    alert(err);
    }



};
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
                    <a href="#"  className='link01'><img src={user} alt="" className='img00'  width={35} height={35} /></a>
                    <input type="text" placeholder='add comment'  className='inp00'  value={newitem} onChange={(e)=>setitem(e.target.value)} />
                    <span className='sp01'>
                        {render}
                    </span>
                    
                    <button className='but00' onClick={()=>{Add()
                    
                    }}>send</button>
                </span>
                <ul className='lis00'>
                    <li className='chlis00'>
                        <div className='ratelay'>
                <span className='sp02'>
                <a href="#"><img src={user} alt="" className='img01' width={35} height={35} /></a>
                <h2 className='h01'>name</h2>
                </span> <span><i> {newstar}</i></span>
               </div>
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
