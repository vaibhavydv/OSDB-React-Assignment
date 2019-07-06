import React from 'react';
import { Link } from 'react-router-dom';
import './tpStyle.css';
import TpBig from '../../assets/images/tp_big_aaron.png';
import TpSmall from '../../assets/images/tp_small.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TrendingPlayers() {
    return (
    <div>
        <div className="tpBg"></div>
        <Container>
             <Row>
                 <Col className="col" sm={7}>
                 <div>
                     <div className="tpImg">
                     <img src = {TpBig} alt="OSDB" />
                     </div>
                     <div className="tpCover">
                         <h1>Aaron Rodgers visits Cal</h1>
                        <div className="tpInfo">
                        <p>11:30PM</p><p className="tpDate">27 MAY 2019</p><Link to="" className="tpRm">Read more &rarr;</Link>
                        </div>
                     </div>
                 </div>
                 </Col>
                 <Col className="tpMain" sm={5}>
                 <div className="tpList">
                    <div className="tpHead"><p>TRENDING PLAYERS</p></div>
                        <div className="tpCard"> 
                            <img src={TpSmall} alt="OSDB"/>
                            <div>
                                <div className="cardTitle"><h2>Aaron Rodgers</h2><h3>SOCCOR</h3></div>
                                <p className="cardPera">Aaron Charles Rodgers (born December 2, 1983) is an American football quarterback for the Green Bay Packers…</p>
                            </div> 
                        </div>
                            <div className="tpCard">
                                <img src={TpSmall} alt="OSDB" />
                                <div>
                                    <div className="cardTitle"><h2>Aaron Rodgers</h2><h3>SOCCOR</h3></div>
                                    <p className="cardPera">Aaron Charles Rodgers (born December 2, 1983) is an American football quarterback for the Green Bay Packers…</p>
                                </div>
                        </div>
                            <div className="tpCard">
                                <img src={TpSmall} alt="OSDB" />
                                <div>
                                    <div className="cardTitle"><h2>Aaron Rodgers</h2><h3>SOCCOR</h3></div>
                                    <p className="cardPera">Aaron Charles Rodgers (born December 2, 1983) is an American football quarterback for the Green Bay Packers…</p>
                                </div>
                            </div>
                            <div className="tpCard">
                                <img src={TpSmall} alt="OSDB" />
                                <div>
                                    <div className="cardTitle"><h2>Aaron Rodgers</h2><h3>SOCCOR</h3></div>
                                    <p className="cardPera">Aaron Charles Rodgers (born December 2, 1983) is an American football quarterback for the Green Bay Packers…</p>
                                </div>
                            </div>
                            <div className="tpCard">
                                <img src={TpSmall} alt="OSDB" />
                                <div>
                                    <div className="cardTitle"><h2>Aaron Rodgers</h2><h3>SOCCOR</h3></div>
                                    <p className="cardPera">Aaron Charles Rodgers (born December 2, 1983) is an American football quarterback for the Green Bay Packers…</p>
                                </div>
                            </div>
                 </div>
                 </Col>
             </Row>
        </Container>
    </div> 
    );
}
export default TrendingPlayers; 