import React, { useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import NavbarUser from "../components/Navbars/NavbarUser";

import image from "../assets/jumbotron.png";

import Login from "../components/auth/login";
import Register from "../components/auth/register";
import CardProduct from "../components/cards/CardProduct";

function Auth() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <NavbarUser
        BtnRegister={
          <>
            <Button
              className="btn-register"
              onClick={() => setShowRegister(true)}
            >
              Register
            </Button>

            <Register
              show={showRegister}
              toggle={toggleLogin}
              handleClose={() => setShowRegister(false)}
            />
          </>
        }
        cart={
          <>
            <Button className="btn-login" onClick={() => setShowLogin(true)}>
              Login
            </Button>

            <Login
              show={showLogin}
              handleClose={() => setShowLogin(false)}
              toggle={toggleRegister}
            />
          </>
        }
      />

      <Container className="mt-4 90vh" style={{ border: "1px solid red" }}>
        <Row className="40vh">
          <Col>
            <img src={image} height="400" alt="jumbotron image" />
          </Col>
        </Row>
        <Row className="40vh mt-4">
          <Col lg={12}>
           <CardProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Auth;
