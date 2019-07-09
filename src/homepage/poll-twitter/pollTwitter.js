import React from 'react';
import './pollTwitterStyle.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Poll() {
    return (
        <>
        <Container className="ptMain">
            <Row >
                <Col xs={12} md={9}>
                    <div className="pollMain">
                        <h2>FEATURED POLL</h2>
                    </div>
                    <div className="pollContent">
                        <p>Real Champions League Winner ?</p>
                    </div>
                    <div className="pollBar">
                        <ProgressBar now={40} label="A. Real Madrid" />
                        <ProgressBar now={89} label="B. Liverpool" />
                        <ProgressBar now={78} label="C. Manchester United F.C." />
                        <ProgressBar now={55} label="D. Manchester United F.C."/>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="twitterMain">
                        <Row>
                            <Col>
                                <h2>TWITTER</h2>
                            </Col>
                            <Col>
                                <Button variant="primary">FOLLOW</Button>
                            </Col>
                        </Row>
                        <div className="twitterContent">
                        <TwitterTimelineEmbed
                                    sourceType="timeline"
                                    screenName="imvaibhavyadav"
                                    theme="light"
                                    noHeader
                                    noFooter
                                    noScrollbar
                                    noBorders
                                    options={{height: 450}}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
        
    );
}

export default Poll; 