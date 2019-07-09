import React from 'react';
import { Link } from 'react-router-dom'
import './socialShareStyle.css';

function SocialShare() {
    return (
        <div className="socialSh">
            <div className="internal">
                <ul>
                    <li><Link to ="https://facebook.com"><i class="fa fa-facebook"></i></Link></li>
                    <li><Link to ="https://twitter.com"><i class="fa fa-twitter tw"></i></Link></li>
                    <li><Link to ="https://instagram.com"><i class="fa fa-instagram"></i></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default SocialShare; 