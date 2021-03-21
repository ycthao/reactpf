import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../../style/index.css";

function NavbarTemplate() {
  return (
    <Navbar className="nvbg">
      <Nav className="mr-auto">
        <Nav.Link to="/reactpf">About Me</Nav.Link>
        <Nav.Link to="/contact">Contact</Nav.Link>
        <Nav.Link to="/portfolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar>



  );
}

export default NavbarTemplate;
