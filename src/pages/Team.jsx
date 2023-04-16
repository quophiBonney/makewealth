import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import TeamOne from "../images/teamone.jpeg";
import TeamTwo from "../images/teamtwo.jpg";
import TeamThree from "../images/teamthree.jpg";
import TeamFour from "../images/teamfour.jpg";
import {Carousel} from "react-bootstrap";
import {BsPerson} from "react-icons/bs";
const Team = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mb-3 mt-5 carousel-container"
          >
            <Carousel indicators={false} controls={false}>
              <Carousel.Item interval={1000}>
                <img
                  src={TeamOne}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={TeamTwo}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={TeamThree}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={TeamFour}
                  className="img-fluid img-responsive carousel-img"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="slide-left"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="px-4 mb-3 mt-3"
          >
            <h2 className="mainText">Meet Our Team Of Experts & Excellence</h2>
            <p className="subText">
              Explore the world of experience and beauty from the team{" "}
              <strong>Bayport</strong>. Our experience, hardworking, dedication
              and humility is what brings our customers that comforting life of
              financial freedom. Our team is always ready to work with you till
              we all see the light of beauty in your finances.
            </p>
            <a href="https://wa.me/+233245153283" className="btn talk-btn mt-3">
              Talk To Us Now
              <BsPerson className="m-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
