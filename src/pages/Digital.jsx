import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Banking from "../images/cashble.png";
import {
  BsLaptop,
  BsWhatsapp,
  BsFullscreen,
  BsLaptopFill,
  BsWalletFill,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Digital = () => {
  return (
    <div className="main-container">
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="px-4 mb-3 mt-5"
          >
            <img
              src={Banking}
              className="img-fluid img-responsive mt-2 side-img"
              alt="mobile banking"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mb-3 mt-5"
          >
            <h1 className="mainText">
              Bayport Digital Banking
              <br />
              Do your banking anytime, anywhere.
            </h1>

            <p className="subText">
              Whether it’s for personal banking or business, we’re committed to
              making your banking experience as easy and as simple as possible.
            </p>
            <a href="">
              <BsLaptopFill className="lap-icon m-2" />
            </a>
            <a href="">
              <BsWhatsapp className="lap-icon m-2" />
            </a>
            <a href="">
              <BsWalletFill className="lap-icon m-2" />
            </a>
            <a href="">
              <BsWalletFill className="lap-icon m-2" />
            </a>
            <a href="">
              <BsWhatsapp className="lap-icon m-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Digital;
