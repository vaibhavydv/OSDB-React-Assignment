import React from 'react'
import { Link } from 'react-router-dom'
import './footerStyle.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function FooterStrip() {
    return (
        <div className="footerStrip">
            <Container>
                <Row>
                    <Col sm={6}>
                        <p>&copy; 2019  OSDB.  All Rights Reserved.</p>
                    </Col>
                    <Col sm={6}>
                        <ul>
                            <li><Link to="/page-one">Contact Us</Link></li>
                            <li><Link to="/page-two">About Us</Link></li>
                            <li><Link to="/">Terms of Use</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default FooterStrip; 