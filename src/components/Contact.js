import React, { Component } from 'react';
import '../App.css';
 
 
class Contact extends Component {
  render (){
    return (
        
        <header className="App-header">
        <div className="container">
            <div className="row">
                    <nav>
                        <ul>
                            
                            <li><a href="#">About Me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href= "#resume" >Resume</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href= "/"> Home </a> </li> 
                        </ul>
                    </nav>
            </div>

            <div className="title">
                <h1> KAREN SIN </h1>
                <h4> Developer | Web designer | Explorer </h4>
                <a href="#" className="btn"> Let's Collab!</a> 
            </div>
        </div>
    </header>
  );
  }
}

export default Contact;
