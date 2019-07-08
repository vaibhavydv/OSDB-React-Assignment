import React from 'react';
import VideoMain from '../../assets/images/video_m.png'
import './videosStyle.css';

function HomeVideos() {
    return (
        <>
        <h1 className="videoHead">VIDEOS</h1>  
        <div className="videosMain">
        <div className="strip"></div>
        <div className="videoList">
        <div className="leftButton">&larr;</div>
        <div className="rightButton">&rarr;</div>
            <img src={VideoMain} alt="OSDB"></img>
        </div>
        </div>
        </>
           
    );
}
export default HomeVideos; 