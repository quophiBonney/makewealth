import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Banking from "../images/cashble.png";
import {BsFillPeopleFill} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mb-3"
          >
            <h1 className="mainText">
              Track All Your Transactions Right On Your Phone
            </h1>
            <p className="subText">
              With our mobile banking service, you can easily track all your
              transactions anywhre, anytime and anyday.
            </p>
            <a
              href="https://wa.me/+233245153283"
              className="btn btn-light text-primary mt-3"
            >
              Make Enquiries
              <BsFillPeopleFill className="m-2" />
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="px-4 mb-3"
          >
            <img
              src={Banking}
              className="img-fluid img-responsive mob-banking"
              alt="mobile banking"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
