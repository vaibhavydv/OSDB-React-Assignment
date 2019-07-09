import React from 'react';
import { Link } from 'react-router-dom';
import VideoMain from '../../assets/images/video_m.png'
import VideoLeft from '../../assets/images/video_l.png'
import VideoRight from '../../assets/images/video_r.png'
import PlayVideo from '../../assets/images/video_play.svg'
import './videosStyle.css';

function HomeVideos() {
    return (
        <>
        <div className="vdoClass">
        <div className="strip"></div>
        <div className="leftButton">&larr;</div>
        <div className="rightButton">&rarr;</div>
        <div className="playButton"><img src={PlayVideo} alt="OSDB"/></div>
        <h1 className="videoHead">VIDEOS</h1>  
        <div>
            <div className="left" >
                <img src={VideoLeft} alt="OSDB"/>
            </div>
            <div className="videoMain">
                <div>
                        <img src={VideoMain} alt="OSDB" />
                </div>
                    <div className="vdoCover">
                        <h1>Sania Mirza give India one more medal</h1>
                        <div className="vdoInfo">
                            <p>1:14 pm&nbsp;</p><p>&bull;&nbsp;27 Feb 2018&nbsp;</p><p>&bull;&nbsp;By: Vaibhav</p>
                            <ul>
                                <li><Link to="https://facebook.com/vaibhavydv"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link to=""><i class="fa fa-twitter"></i></Link></li>  
                                <li><Link to=""><i class="fa fa-share-alt"></i></Link></li>    
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="right">
                <img src={VideoRight} alt="OSDB"/>
            </div>
        </div>
        </div>
        </>
           
    );
}
export default HomeVideos; 