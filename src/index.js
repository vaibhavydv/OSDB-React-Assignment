import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import pageOne from './page1';
import pageTwo from './page2';
import * as serviceWorker from './serviceWorker';

// routes 
const routing = (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/page-one" component={pageOne} />
      <Route path="/page-two" component={pageTwo} />
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
