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
            <Container fluid={true}>
                <Row className='projectsBox'>
                    <Col>
                        <Square className="projectBox" imgSrc={process.env.PUBLIC_URL + "/images/MeeseeksBox.jpg"}
                                linkSrc="https://www.facebook.com/meeseeksBox2019" projName="Meeseeks Bot"/>
                    </Col>
                    <Col>
                        <Square className="projectBox"/>
                    </Col>
                    <Col>
                        <Square className="projectBox"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Projects;
