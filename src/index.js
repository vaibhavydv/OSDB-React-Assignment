import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import pageOne from './page1';
import pageTwo from './page2';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-one">Page 1</Link>
        </li>
        <li>
          <Link to="/page-two">page 2</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/page-one" component={pageOne} />
      <Route path="/page-two" component={pageTwo} />
    </div>
    </Router>
)
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
