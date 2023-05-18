import facebook from './images/facebook.png';
import google from './images/google.png';
import background from './images/pizza.jpg';


export default function Form1(){
    return(
        <div >
        <img src={background} className='background'/>
        <h1>SignUp to make<br />
             your meal <br />
             better</h1>
        <div className="div1">
            <p className="p1">Rate it</p>
            <p className="p2">Welcome</p>
            <form >
                <label className="l1">Name :</label> 
                
                <input type="text" className="in1" placeholder="Name" required />
                
                <label className="l2">Email :</label>
                
                <input type="email" className="in2" placeholder="Email" required />
                
                <label className="l3">Password</label>
                
                <input type="password" className="in3" placeholder="Password" required />
                
                <div className="div2">
                    <a href='https://www.google.com' className="a1">Do you have an account?</a>
                    <a href='https://www.google.com' className="a2">Login</a>
                </div>
                <input type="submit" className="in4" value="continue" />
                <label className="l4">OR</label>
                    <div className="div3">
                        <input type="submit" img={facebook} value="Continue with facebook " className="in5" />
                        <input type="submit" value="Continue with google" className="in6" />
                    </div>
                <div>
                    
                </div>
            </form>
            
            

            
            </div>
        
        </div>
    );
}