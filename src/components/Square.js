import React, { Component } from 'react';
import Dimensions from 'react-dimensions';

import './Projects.css';

class Square extends Component {
  render (){
    return (

        <a href = {this.props.linkSrc} className={this.props.className}
            style={{
              width: this.props.containerWidth * 0.8, 
              height: this.props.containerWidth * 0.8,
              left: this.props.containerWidth * 0.1,
              backgroundImage:"url(" + this.props.imgSrc + ")"
            }}> 
            {this.props.children}
        </a>

    );
  }
}

export default Dimensions()(Square);
