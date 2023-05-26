import './companypage.css';
import list from '../assets/imgs/feedback.png';
export default function Company(){


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
                    <a href="" ><img src="" alt=""  /></a>
                    <input type="text" placeholder='add comment'  />
                    <span className='sp01'> <img src={list} alt=""width={38} height={26} /></span>
                    <button>send</button>
                </span>
                <div>
                <span>
                <a href=""><img src="" alt="" /></a>
                <h2>name</h2>
                </span>
                <span><i></i></span>
                <div>
                    <p>comment</p>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}