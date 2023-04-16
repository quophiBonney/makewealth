import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsTelegram, BsWhatsapp, BsFacebook, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs={6} sm={6} col={3} lg={3} className="footer-col px-4">
            <h4 className="footer-link-header">About Us</h4>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Our Company
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Bayport Community
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Media Centre
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+2332045153283" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} col={3} lg={3} className="footer-col px-4">
            <h4 className="footer-link-header">Important Links</h4>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Bayport Personal Banking
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Bayport Corporate Banking
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Unclaimed Monies
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+2332045153283" className="footer-link">
                  Daily & Monthly Report
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} col={3} lg={3} className="footer-col px-4">
            <h4 className="footer-link-header">Online Fraud Awareness</h4>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Bayport Awareness
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Protecting Your Account
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Report A Lost Card
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={6} col={3} lg={3} className="footer-col px-4">
            <h4 className="footer-link-header">Connect With Us</h4>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  <BsFacebook />
                  <span className="m-2">Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://t.me/programming_with_bonney"
                  className="footer-link"
                >
                  <BsTelegram />
                  <span className="m-2">Telegram</span>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+233245153283" className="footer-link">
                  <BsWhatsapp />
                  <span className="m-1">Whatsapp</span>
                </Link>
              </li>
              <li>
                <Link to="" className="footer-link">
                  <BsLinkedin />
                  <span className="m-2">Linkedin</span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
