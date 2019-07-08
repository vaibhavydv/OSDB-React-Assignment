import React from 'react';
import './tnStyle.css';
import TpBig from '../../assets/images/tp_big_aaron.png';
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
            <Row >
                    <Col className="newsBig" sm={6}>
                       <img src ={TpBig} alt="OSDB" /> 
                    </Col>
                    <Col className="newsSmall" sm={6}>
                        <Row className="newsSmall1">
                            <img src={TpBig} alt="OSDB" />  
                        </Row>
                        <Row className="newsSmall1">
                            <div className="margin">
                                <img src={TpBig} alt="OSDB" /> 
                            </div> 
                        </Row>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col sm={6}>
                        <Row className="backgroundTest">4</Row>
                        <Row className="backgroundTest">5</Row>
                </Col>
                    <Col className="backgroundTest" sm={6}>6</Col>
            </Row>
        </Container>
        </>
    );
}
export default NewsOsdb; 