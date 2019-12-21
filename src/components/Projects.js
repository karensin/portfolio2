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
      <Container className=".mt-4">
        <Row className = 'projectsBox'>
          <Col>
            <Square className="projectBox" imgSrc = {process.env.PUBLIC_URL + "/images/MeeseeksBox.jpg" } linkSrc= "https://www.facebook.com/meeseeksBox2019">
              <div className="projectName">Meeseeks Bot</div>
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
