import React, { Component } from 'react';
import '../App.css';
 
 
class About extends Component {
  render (){
    return (
        <div>
        <header className="App-header">
        <div className="container">
            <div className="row">
                    <nav>
                        <ul> 
                            <li><a href= "/"> Home </a> </li> 
                        </ul>
                    </nav>
            </div>

             </div>
    </header>
              
    <section className='contacts'> 
 
          <a>  kkwsin@gmail.com  </a>
         <a href= 'https://www.linkedin.com/in/karensin94/'>  Linkedin  </a>
         <a href= 'https://github.com/karensin'>  Github   </a> 
         <a href= 'https://angel.co/karen-kaweng-sin'> Angel.co </a>
             
        
         </section>

         <footer> Karensin 2019 </footer>
    </div>

  );
  }
}

export default About;
