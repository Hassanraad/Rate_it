import { useState,useEffect } from 'react';
import './compnydetalis.css';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {FaStar}from'react-icons/fa';

export default function Detalis() {
    const [lis,setlis]=useState([])
    useEffect(()=>{
        const q = query(collection(db, 'products'));
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
        <div className="header0001">
                <div className='header0002'>
                    <div>
                        <span><p className='pam00000001'>Pizza Hut</p></span>
                    </div>
                    <div>
                        <span><p className='pam00000003'>Pizza Hut one of best restaurant in the world </p></span>
                    </div>
                    <div>
                            <span><p className='pam00000002'>location : AL_Jadriya</p></span>
                    </div>
                    <div>
                            <span><p className='pam00000002'> order in: 07728167699</p></span>
                    </div>
                </div>
        </div>
        <div className=''>
            <div><p className='pam00000004'>Pizza Hut menu</p></div>
            <ul className='ul888888'>
                {lis.map((lise)=>(<li className='lii'>
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
                            {lise.descrption}
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
        </div>
    </>
    )
}