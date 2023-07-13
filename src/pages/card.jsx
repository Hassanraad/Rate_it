import { useState,useEffect } from 'react';
import './compnydetalis.css';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {FaStar}from'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Card ()  {
    const [lises,setlis]=useState([])
    const naviagte = useNavigate();

    function Move(){
        naviagte("/company")
    }
    useEffect(()=>{
        const q = query(collection(db, 'company'));
        onSnapshot(q, (querySnapshot) => {
          console.log(querySnapshot);
          setlis(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
    },[])
 return(

    <>
            <ul className='ul888888' >
                {lises.map((lise)=>(<li onClick={Move}>
            <div className='pam00000005'>
                <div className='bbbs'>
                    <img src={lise.img} alt="" width={310} height={160}     border-radius={ "16px 16px 0px 0px !important"} classname="img090"/>
                </div>
                <div className='pam00000007'>
                    <div className='pam00000006'>
                        <span className='pam000000011'>
                            {lise.name}
                        </span>
                        <span className='pam000000010'>
                            {lise.description}
                        </span>
                    </div>
                    <div className='pam00000008'>
                        <span>
                        { [...Array(5)].map((star,i)=>{
            const rating = i+1;
            return(   
             <label  className='star'> <input type= "radio" disabled name="rating" value={rating}/><FaStar size={16}color={rating<= lise.rating?"#ffc107":"#e4e5e9"} /> </label>
            )
       }) }
                        </span>
                        <span className='pam00000009'>
                            {lise.price}
                        </span>
                    </div>
                </div>
            </div>
            </li>))}
            </ul>
        
        
    </>
  )
};
