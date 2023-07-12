import Search from'../assets/imgs/search-interface-symbol.png';
export default function Navbar(){
    return (
        <div>
        <div className="nav">
            <div>
            <p className="parag123">Rate it</p>
            </div>
            <div className='div0001'>
            <a href="" className="home">Home</a>
            <a href="" className="service">Service</a>
            <a href="" className="about">About</a>
            <a href="" className="content">Content</a>
            </div>
            <div>
                <label className='lbl001'>
                        <input type="text" placeholder='Search' className='in0001'/>
                        <img src={Search} alt=""width={20} height={20} className='img0001' />
                </label>
            </div>
            <div className='div0002'>
            <button className="btn1">Sign in</button>
            <button className="btn2">Sign up</button>
            </div>
        </div>
       </div>

    );

}