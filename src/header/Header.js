import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import './headerStyle.css';

function Header() {
    return (
        <div className = "osdbMenu">
            <Link to ="/">
                <img className="customLogo" src={logo} alt="OSDB"></img>
            </Link>
            <div className="osdbSearch">
                <span><i class ="fa fa-search"></i></span> <input type="text" name="name" placeholder="Search OSDB Players and News"/>
            </div>
            <div className="osdbNav">
            <ul>
                <li><Link to="/page-one">NFL</Link></li>
                <li><Link to="/page-two">NBA</Link></li>
                <li><Link to="/">+</Link></li>
                <li><Link to="/">NHL</Link></li>
                <li><Link to="/">VIDEOS</Link></li>
            </ul>
            <ul>
                <li><i class="fa fa-user-circle-o"></i><Link to ="">ACCOUNT <i class="fa fa-angle-down" aria-hidden="true"></i></Link></li>
            </ul>
            </div>
          </div>
      );
}
 export default Header; 