import React from 'react';
import BrakingNewsLogo from '../../assets/images/breaking_news.png';
import './bnStyle.css';

function BreakingNews() {
    return (
        <div className="osdbBn">
            <span>
                <img src={BrakingNewsLogo} alt="OSDB" />
            </span>
            <marquee>
                    Sports news and live sports coverage of your favourite sports.
            </marquee>
     </div>   
    );
}
export default BreakingNews; 