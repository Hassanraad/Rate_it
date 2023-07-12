import './companypage.css';
import React , { useEffect, useState} from "react";
import user from '../assets/imgs/profile.png'
import Flotlist from '../components/rating';
import {FaStar}from'react-icons/fa';
import { addDoc,collection ,onSnapshot,query} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Company(){
    const [newitem,setitem]=useState();
    const [newcom,setcom]=useState([]);
    const naviagte = useNavigate();
    const{render,current,current1,current2,current3,current4}= Flotlist()
    const total = Math.round((current+current1+current2+current3+current4)/5)

    const Add= async (e)=>{
        e.preventDefault();
        const auth = getAuth();
    const user1 = auth.currentUser;
    if (user1 !== null) {
     const name =user1.displayName;
     console.log(user1.displayName)
       try {
        await addDoc(collection(db, 'comments'), {
            name,
            newitem,
            total,
        });
      } catch (err) {
        alert(err);
      }
    }
     setitem("")
    };

    useEffect(()=>{ 
        if(localStorage.getItem("token")===""){
            naviagte('/');
          }
        const q = query(collection(db, 'comments'));
        onSnapshot(q, (querySnapshot) => {
          console.log(querySnapshot);
          setcom(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
  

},[])

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
            <form onSubmit={Add} className='frm000'>
            <div className='com00'>
                <h1 className='h00'>Comments</h1>
                <span className='sp00'>
                    <a href="#"  className='link01'><img src={user} alt="" className='img00'  width={35} height={35} /></a>
                    <input type="text" placeholder='add comment'  className='inp00'  value={newitem} onChange={(e)=>setitem(e.target.value)} />
                    <span className='sp01'>
                        {render}
                    </span>
                    
                    <button className='but00' type='Submit'>send</button>
                </span>
                <ul className='lis00'>
                   {newcom.map((com)=>( <li className='chlis00'>
                        <div className='ratelay'>
                <span className='sp02'>
                <a href="#"><img src={user} alt="" className='img01' width={35} height={35} /></a>
                <h2 className='h01'>{com.name}</h2>
                </span> <span><i>  { [...Array(5)].map((star,i)=>{
            const rating = i+1;
            return(   
             <label  className='star'> <input type= "radio" disabled name="rating" value={rating}/><FaStar size={18}color={rating<= com.total?"#ffc107":"#e4e5e9"} /> </label>
            )
       }) }</i></span>
               </div>
                <div className='com01'>
                    <p className='par03'> {com.newitem}  </p>
                </div>
                </li>))}
                </ul>
            </div></form>
        </div>
        
        </>
    )
}
