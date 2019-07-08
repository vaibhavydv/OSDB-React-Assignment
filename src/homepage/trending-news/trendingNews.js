import React from 'react';
import { Link } from 'react-router-dom';
import './tnStyle.css';
import TnBig from '../../assets/images/tn_big.png';
import TnSmall from '../../assets/images/tn_small.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function NewsOsdb() {
    return (
        <>
        <div className="newsclass">
            <h2>TRENDING NEWS</h2>
        </div>
        <Container>
            <div className="newsContainer">
            <Row>
                    <Col className="newsBig " sm={5}>
                      <div>
                          <img src={TnBig} alt="OSDB"></img>
                      </div>
                            <div className="tnCover tpOne">
                         <h1>It sounded like Aaron Rodgers was returning</h1>
                        <div className="tnInfo">
                        <p>11:30PM</p><p className="tnDate">27 MAY 2019</p><Link to="" className="tnRm">READ MORE &rarr;</Link>
                        </div>
                     </div>

                    </Col>
                    <Col className="newsSmall" sm={6}>
                        <Row className="newsSmall1 customMargin0">
                            <div>
                                <img src={TnSmall} alt="OSDB"></img>
                            </div>
                            <div className="tnCoverSmall">
                                <h1>It sounded like Aaron Rodgers was returning</h1>
                                <div className="tnInfoSmall">
                                <p>11:30PM</p><p className="tnDateSmall">27 MAY 2019</p><Link to="" className="tnRmSmall">READ MORE &rarr;</Link>
                                </div>
                             </div>
                        </Row>
                        <Row className="newsSmall1 customMargin20">
                        <div>
                                <img src={TnSmall} alt="OSDB"></img>
                            </div>
                            <div className="tnCoverSmall">
                                <h1>It sounded like Aaron Rodgers was returning</h1>
                                <div className="tnInfoSmall">
                                <p>11:30PM</p><p className="tnDateSmall">27 MAY 2019</p><Link to="" className="tnRmSmall">READ MORE &rarr;</Link>
                                </div>
                             </div>
                        </Row>
                </Col>
            </Row>
            </div>
            <div className="newsContainer2">
            <Row>
                    <Col className="newsSmall2" sm={6}>
                        <Row className="newsSmall2 customMargin0">
                        <div>
                            <img src={TnSmall} alt="OSDB"></img>
                        </div>
                        <div className="tnCoverSmall1">
                            <h1>It sounded like Aaron Rodgers was returning</h1>
                            <div className="tnInfoSmall1">
                            <p>11:30PM</p><p className="tnDateSmall1">27 MAY 2019</p><Link to="" className="tnRmSmall1">READ MORE &rarr;</Link>
                            </div>
                        </div>
                        </Row>
                        <Row className="newsSmall2 customMargin20">
                            <div>
                                <img src={TnSmall} alt="OSDB"></img>
                            </div>
                            <div className="tnCoverSmall1">
                                <h1>It sounded like Aaron Rodgers was returning</h1>
                                <div className="tnInfoSmall1">
                                <p>11:30PM</p><p className="tnDateSmall1">27 MAY 2019</p><Link to="" className="tnRmSmall1">READ MORE &rarr;</Link>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col className="newsBig2 " sm={5}>
                    <div>
                    <img src={TnBig} alt="OSDB"></img>
                    </div>
                    <div className="tnCover">
                         <h1>It sounded like Aaron Rodgers was returning</h1>
                        <div className="tnInfo">
                        <p>11:30PM</p><p className="tnDate">27 MAY 2019</p><Link to="" className="tnRm">READ MORE &rarr;</Link>
                        </div>
                     </div>
                      
                    </Col>
            </Row>
            </div>
        </Container>
        </>
    );
}
export default NewsOsdb; 