import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import cheap from "../images/cheap.png";
import {BsCashCoin, BsFillPeopleFill} from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
const Main = () => {
  return (
    <div className="main-container">
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mt-3 mb-3"
          >
            <h1 className="mainText">
              How to Grow Your Wealth With Smart Banking: The Benefits of
              Investing with Our Bank.
            </h1>
            <p className="subText">
              We are the multinational banking firm that gives you more than
              <strong>10%</strong> on your investment without any risk.
            </p>
            <a
              href="https://wa.me/+233245153283"
              className="btn btn-enquiries mt-2"
            >
              Start Investing
              <BsCashCoin className="m-2" />
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="px-4 mt-3 mb-3"
          >
            <img
              src={cheap}
              className="img-fluid img-responsive carousel-img"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
