import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dimensions from 'react-dimensions';
import Bubbles from './Bubbles.js';
import './Projects.css';
import Square from './Square.js';


class Projects extends Component {
  constructor (props){
  super(props);
  this.state = {
      x: 0, 
      y: 0,
      bubbles: []
  };
   
}
 _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
     this.state.bubbles.push(<Bubbles x={e.screenX} y={e.screenY}/>)
    this.setState({bubbles: this.state.bubbles})
   }

componentDidMount() {
   }
  render() {
   
     return (
         <Container onMouseMove={this._onMouseMove.bind(this) }>
          <Bubbles/>
          {this.state.bubbles}
          <Row>
            <Col><Square className="projectBox" imgSrc = {process.env.PUBLIC_URL +
          "/images/MeeseeksBox.jpg" } linkSrc= "https://www.facebook.com/meeseeksBox2019">
           <div className="projectName"> Meeseeks Bot  </div>
            </Square></Col>
            <Col><Square className="projectBox">   </Square></Col>
            <Col><Square className="projectBox">   </Square></Col>
          </Row>
        </Container>

      )
  }
}


export default Projects;
