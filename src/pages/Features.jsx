import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Banking from "../images/faq.png";
import {
  BsEmojiLaughingFill,
  BsHouse,
  BsFillPeopleFill,
  BsEmojiSmileFill,
  BsPiggyBank,
  BsBank2,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Features = () => {
  return (
    <div className="features">
      <Container
        data-aos="zoom-out"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <Row className="justify-content-center">
          <h2 className="feature mt-5 text-center">
            Now banking is easier and more accessible than ever
          </h2>
          <p className="text-center mb-5">
            Discover how Kina Bank can help you.
          </p>
          <Col xs={12} sm={6} md={6} lg={4} className="mb-5 mt-3">
            <div className="flex text-center">
              <BsHouse className="m-2 feature-icon" />
              <h3 className="feature-title">
                &nbsp;&nbsp;&nbsp;&nbsp;Home Loans
                <ul className="mt-2">
                  <li>
                    <Link to="/" className="feature-link">
                      Bayport Prime Banking&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Everyday Account&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Everyday Account&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Everyday Account&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                </ul>
              </h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="mb-3 mt-3">
            <div className="flex text-center">
              <BsBank2 className="m-2 feature-icon" />
              <h3 className="feature-title">
                &nbsp;&nbsp;&nbsp;&nbsp;Business Banking
                <ul className="mt-2">
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Venture Debit Card&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Venture Debit Card&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      Bayport Secured SME Loan&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort EFTPOS&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                </ul>
              </h3>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="mb-3 mt-3">
            <div className="flex text-center">
              <BsFillPeopleFill className="m-2 feature-icon" />
              <h3 className="feature-title">
                &nbsp;&nbsp;&nbsp;&nbsp;Personal Banking
                <ul className="mt-2">
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Everyday Account&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Credit/Debit Card&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Tomorrow Savings&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="feature-link">
                      BayPort Product Range&nbsp;
                      <BsEmojiSmileFill />
                    </Link>
                  </li>
                </ul>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
