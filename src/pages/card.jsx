import React from 'react';
import "./home1.css";

const Card =(props) => {
 return(

    <>
     {props.details.map ((value,index) =>
    (
        <div className="card" key={index}> 
            <div className="card-image">
             <img src={value.img}  />
            </div>
            <div className='contact'>
                <div className='leftContact'>
                 <p className="card-title">{value.title}</p>
                <p className="description">{value.description}</p>

                </div>
                <div className='rightContact'>
                  <p className="rating">{value.rating}</p>
                </div>
              
            </div>
            
                
            
        </div>
    ))}
    ;
    </>
  );
};
export default Card;