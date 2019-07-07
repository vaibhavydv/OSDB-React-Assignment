import React from 'react'
import { Link } from 'react-router-dom'
import './footerStyle.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterLogo from '../assets/images/logoFooter.svg'
import NewsLetter from '../assets/images/news_ltr.png'
import PlayStore from '../assets/images/play_store.png'
import AppStore from '../assets/images/app_store.png'

function Footer() {
    return (
     <div className="osdbFooter">
        <Container>
            <Row>
                <Col sm={3}>
                    <img className="footerLogo" src={FooterLogo} alt="OSDB" />
                </Col>
                <Col className="quickLinks" sm={3}>
                    <h4>QUICK LINKS</h4>
                        <ul>
                            <li><Link to="/">NFL GAME</Link></li>
                            <li><Link to="/">MLB PRO</Link></li>
                            <li><Link to="/">NBA +</Link></li>
                            <li><Link to="/">IPL 2019</Link></li>
                        </ul>
                </Col>
                <Col className="followOSDB" sm={3}>
                    <h4>FOLLOW OSDB</h4>
                        <ul>
                            <li><Link to="/"><i class="fa fa-facebook-official" />&nbsp;&nbsp;Facebook</Link></li>
                            <li><Link to="/"><i class="fa fa-twitter" />&nbsp;&nbsp;Twitter</Link></li>
                            <li><Link to="/"><i class="fa fa-instagram" />&nbsp;&nbsp;Instagram</Link></li>
                            <li><Link to="/"><i class="fa fa-snapchat-ghost" />&nbsp;&nbsp;Snapchat</Link></li>
                            <li><Link to="/"><img src={NewsLetter} alt="OSDB"/>&nbsp;&nbsp;&nbsp;Newsletter</Link></li>
                        </ul>
                </Col>
                <Col className="osdbApp" sm={3}>
                    <h4>OSDB APPS</h4>
                    <img src={AppStore} alt="OSDB"/>
                    <img src={PlayStore} alt="OSDB"/>
                </Col>
            </Row>
        </Container>
     </div>
    );
}
export default Footer; 