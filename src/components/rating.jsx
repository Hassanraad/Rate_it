import '../pages/companypage.css';
import list from '../assets/imgs/clipboard.png';
import React , {useState} from 'react';
import {FaStar}from'react-icons/fa';

export default function Flotlist(){
     const [open,setopen]=useState(false);
     const [current,setcureent]=useState(null);
     const [current1,setcureent1]=useState(null);
     const [current2,setcureent2]=useState(null);
     const [current3,setcureent3]=useState(null);
     const [current4,setcureent4]=useState(null);
     function Active(){
          setopen(!open)
     }
    return{current,current1,current2,current3,current4, render:(<>
    <img src={list} alt=""width={25} height={30} onClick={()=>Active()}    />
    <div className={`flotlist${open}`}>

         <ul className={`anlist`}>
            <li><span> <p>Taste:</p>
                <span>
               {[...Array(5)].map((star,i)=>{
                    const rating = i+1;
                    return(   
                     <label  className='star'> <input type= "radio" name="rating" value={rating} onClick={()=> setcureent(rating)}/><FaStar size={18}color={rating<= current?"#ffc107":"#e4e5e9"} /> </label>
                    )
               })}
               </span>
            </span></li>
            <li><span> <p>Cleanliness:</p>            <span>
            {[...Array(5)].map((star,i)=>{
                    const rating1 = i+1;
                    return(
                     <label  className='star'> <input type= "radio" name="rating" value={rating1} onClick={()=> setcureent1(rating1)}/><FaStar size={18} color={rating1<= current1?"#ffc107":"#e4e5e9"}/> </label>
                    )
               })}
               </span>
           </span></li>
            <li><span> <p>Price:</p>         <span>
            {[...Array(5)].map((star,i)=>{
                    const rating2 = i+1;
                    return(
                     <label  className='star'> <input type= "radio" name="rating" value={rating2} onClick={()=> setcureent2(rating2)}/><FaStar size={18} color={rating2<= current2?"#ffc107":"#e4e5e9"}/> </label>
                    )
               })}
               </span>
           </span></li>
            <li><span> <p>Service:</p>           <span>
            {[...Array(5)].map((star,i)=>{
                    const rating3 = i+1;
                    return(
                     <label  className='star'> <input type= "radio" name="rating" value={rating3} onClick={()=> setcureent3(rating3)}/><FaStar size={18} color={rating3<= current3?"#ffc107":"#e4e5e9"}/> </label>
                    )
               })}
               </span>
           </span></li>
            <li><span> <p>Time:</p>  
            <span>
            {[...Array(5)].map((star,i)=>{
                    const rating4 = i+1;
                    return(
                     <label  className='star'> <input type= "radio" name="rating" value={rating4} onClick={()=> setcureent4(rating4)}/><FaStar size={18} color={rating4<= current4?"#ffc107":"#e4e5e9"}/> </label>
                    )
               })}
               </span>
           </span></li>
         </ul>
    </div>
    </>
    )}
}