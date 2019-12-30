import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Contact from './components/Contact.js';
import { Route, Link } from 'react-router-dom';
import Resume from './components/Resume.js'
import About from './components/About.js'

ReactDOM.render(  
    <BrowserRouter>
        <main>
     
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
         </main>
    </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
