import React, { Component } from 'react';
import Dimensions from 'react-dimensions';

import './Projects.css';

class Square extends Component {
  render (){
    return (
      <div className= "wrapper"> 
        <a href = {this.props.linkSrc} > 
          <div className={this.props.className}
            style={{
              height:this.props.containerWidth,
              backgroundImage:"url(" + this.props.imgSrc + ")"
            }}>
            {this.props.children}
          </div>
        </a>
      </div>
    );
  }
}

export default Dimensions()(Square);
