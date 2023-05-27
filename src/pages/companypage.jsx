import './companypage.css';
import list from '../assets/imgs/clipboard.png';
import user from '../assets/imgs/profile.png'
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
                    <a href="#"  className='link01'><img src={user} alt=""  width={35} height={35} /></a>
                    <input type="text" placeholder='add comment'  className='inp00' />
                    <span className='sp01'> <img src={list} alt=""width={25} height={30} /></span>
                    <button className='but00'>send</button>
                </span>
                <ul className='lis00'>
                    <li className='chlis00'>
                <span className='sp02'>
                <a href="#"><img src={user} alt="" width={35} height={35} /></a>
                <h2 className='h01'>name</h2>
                </span>
                <span><i></i></span>
                <div className='com01'>
                    <p className='par03'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis molestiae esse amet rerum dolorem fugiat corporis asperiores provident sit culpa error nesciunt quo non, reiciendis animi. Iusto, alias minus!</p>
                </div>
                </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}