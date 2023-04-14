import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Leaders from "../images/worriedsvg.png";
import {BsPerson} from "react-icons/bs";
const Unique = () => {
  return (
    <div className="unique">
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4 mb-3"
          >
            <img
              src={Leaders}
              className="img-fluid img-responsive mob-banking"
              alt="mobile banking"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="slide-left"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="px-4 mb-3"
          >
            <h1 className="mainText">
              Are You Worried About Your Finances
              <span className="question-mark">?</span>
            </h1>
            <p className="subText">
              We are the leading banking firm with the track record to help your
              financial life turn around for your good. We are the only firm
              that guides our customers in their investment till they
              breakthrough financially.
            </p>
            <a
              href="https://wa.me/+233245153283"
              className="btn btn-light connect-btn mt-3"
            >
              Connect With Us
              <BsPerson className="m-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Unique;
