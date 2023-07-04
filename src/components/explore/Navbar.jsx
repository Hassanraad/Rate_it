import img from'./img1.png';
export default function Navbar(){
    return (
        <div>
        <div className="nav">
            <p className="parag123">Rate it</p>
            <a href="" className="home">Home</a>
            <a href="" className="service">Service</a>
            <a href="" className="about">About</a>
            <a href="" className="content">Content</a>
            <button className="btn1">Sign in</button>
            <button className="btn2">Sign up</button>
        </div>
        <p className="p2">Rate it & make 
        it better </p>
        <p className="p3">Here you can rate your meal & get a better experiment next time</p>
        <button className="btn3">Explore</button>
        <button className="btn4">Read more</button>
        
        <img src={img} className='img123'></img>
        </div>

    );

}