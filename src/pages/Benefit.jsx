import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Coin from "../images/coin.jpeg";
import Counting from "../images/countingmoney.png";
import Img3 from "../images/img3.jpg";
import {Carousel} from "react-bootstrap";
import {BsChatHeart, BsPerson} from "react-icons/bs";

const Benefit = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-out"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="px-4 mb-3 mt-3"
          >
            <h2 className="mainText">What Do We Offer You?</h2>
            <p className="subText">
              We offer you with the best scheme of investment without risk and
              huge returns. Again our sms messages that you receive on your
              phones from us are completely free thus we don't deduct anything
              from you. We also offer you the opportunity to top-up your initial
              deposit if you are willing to do so. Our customer care support is
              always available
              <em>
                <strong>24/7</strong>
              </em>
            </p>
            <a
              href="https://wa.me/+233245153283"
              className="btn btn-enquiries mt-3"
            >
              Discover More
              <BsChatHeart className="m-2" />
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mb-3 mt-5 carousel-container"
          >
            <Carousel indicators={false} controls={false}>
              <Carousel.Item interval={1000}>
                <img
                  src={Coin}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Img3}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Counting}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefit;
