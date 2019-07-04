import React from 'react';
import './tpStyle.css';

function TrendingPlayers() {
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
export default TrendingPlayers; 