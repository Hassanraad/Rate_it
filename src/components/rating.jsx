import '../pages/companypage.css';
import list from '../assets/imgs/clipboard.png';
import React , {useEffect,useState} from 'react';
export default function Flotlist(){
     const [open,setopen]=useState(false);
     function Active(){
          setopen(!open)
          console.log(open)
     }
    return(<>
    <img src={list} alt=""width={25} height={30} onClick={()=>Active()}    />
    <div className={`flotlist${open}`}>

         <ul className={`anlist`}>
            <li><span> <p>Taste:</p>
            <label>
                 <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            </label>
            </span></li>
            <li><span> <p>Cleanliness:</p>       <label>
                 <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            </label></span></li>
            <li><span> <p>Price:</p>       <label>
                 <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            </label></span></li>
            <li><span> <p>Service:</p>      <label>
                 <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            </label></span></li>
            <li><span> <p>Time:</p>       <label>
                 <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            </label></span></li>
         </ul>
    </div>
    </>
    )
}