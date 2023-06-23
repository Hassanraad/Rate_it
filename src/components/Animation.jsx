import React, { Component } from 'react';
import './Animation.css';
import RedStar from './images/RedStar.png';
import delivery from './images/delivery.png';
import location from './images/locationsign.png';
import burger from './images/burger.png';
<MyComponent image={RedStar} />
function MyComponent(props) {
    return (
    
      <div>
        <img src={props.ww} alt="My Image" />
      </div>
    );
  }
  
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 'scale(1)',
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    setTimeout(() => {
      this.setState({ transform: 'scale(1.5)' });
      /*
      setTimeout(() => { // this line will make it repeat 
        this.setState({ transform: 'scale(1)' });
        this.animate();
      }, 1000);*/
    }, 1000);
  }

  render() {
    return (
      <div className="Animation">
        
        <img src={location} alt={this.props.imageAlt} style={{ transform: this.state.transform }} className='img1'/>
        <img src={burger} alt={this.props.imageAlt} style={{ transform: this.state.transform }} className='img2'/>
        <img src={RedStar} alt={this.props.imageAlt} style={{ transform: this.state.transform }} className='img3'/>
        <img src={delivery} alt={this.props.imageAlt} style={{ transform: this.state.transform }} className='img4'/>

        <p className='para'>What you can find here</p>
       </div>
    );
  }
}

export default Animation;