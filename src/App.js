import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';
import Projects from './components/Projects.js';
  

 
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
       
    }

  

      render() {
 
        return (
          <div className="App">

           <header className="App-header">
             <div className="container">
                 <div class="row">
                   <div>
                     <nav>
                       <ul>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Projects</a></li>
                         <li><a href="#">Resume</a></li>
                         <li><a href="#">Contact</a></li>
                       </ul>
                     </nav>  
                   </div> 
                 </div>
                <div class="title">    
                     <h1> KAREN SIN </h1>
                    <h4> Developer | Web designer | Explorer </h4>
                  <a href="#" class="btn">Let's Collab!</a>                                         
                  
                  </div>
              </div>
              
            </header>

             
            <h2> </h2>
            <Projects/>
             
          </div>
        );
      }
    }
  export default App;
