import React from 'react';
import VideoMain from '../../assets/images/video_m.png'
import VideoLeft from '../../assets/images/video_l.png'
import VideoRight from '../../assets/images/video_r.png'
import './videosStyle.css';

function HomeVideos() {
    return (
        <>
        <h1 className="videoHead">VIDEOS</h1>  
        <div className="strip"></div>
        <div className="videosMain">
        <div className="videoList">
            <div className="leftButton">&larr;</div>
            <div className="rightButton">&rarr;</div>
            <div className="left" >
                <img src={VideoLeft} alt="OSDB"/>
            </div>
            <img src={VideoMain} alt="OSDB"/>
            <div className="right">
                <img src={VideoRight} alt="OSDB"/>  
            </div>
           
            <img/>
        </div>
        </div>
        </>
           
    );
}
export default HomeVideos; 