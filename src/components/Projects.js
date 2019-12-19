import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import Square from './Square.js';


class Projects extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Square className="projectBox" imgSrc = {process.env.PUBLIC_URL + "/images/img.png" } linkSrc = "http://www.google.com">
              <div className="projectName"> asdf </div>
            </Square>
          </Col>
          <Col>
            <Square className="projectBox">
              <div className="projectName"> asdf </div>
            </Square>
          </Col>
          <Col>
            <Square className="projectBox">
              <div className="projectName"> asdf </div>
            </Square>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Projects;
