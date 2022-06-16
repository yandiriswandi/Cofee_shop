import React, { useState, useRef } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Overlay, Tooltip
} from "react-bootstrap";
import { Link } from "react-router-dom";


import iconBrand from "../../assets/Icon.png";

export default function NavbarUser({ cart, profile, btnLogin, BtnRegister }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Navbar className="5vh navbars" style={{ backgroundColor: "#F5F5F5" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/user">
          <img
            src={iconBrand}
            width="150"
            className=" ms-5"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link>{cart}</Nav.Link>
            <Nav.Link>
              {BtnRegister}
             
            </Nav.Link>
            <Nav.Link>
            {profile}
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

