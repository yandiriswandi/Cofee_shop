import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ActiveProfile from "../tooltips/activeProfile";


import logo from './../../assets/logo.png'

const HeaderAdmin = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo}
                            alt="Logo WOW"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            onClick={() => navigate('/transaction')}
                        />
                    </Navbar.Brand>
                    <Nav className="d-flex">
                        <Navbar.Brand
                            className="me-2">
                            <ActiveProfile />
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}
export default HeaderAdmin;

// 