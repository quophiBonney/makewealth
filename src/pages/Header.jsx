import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import Unique from "./Unique";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            GIM
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link href="/" className="links">
                Home
              </Nav.Link>
              <Nav.Link href="/unique" className="links">
                Benefits
              </Nav.Link>
              <Nav.Link href="/about" className="links">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="links">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
