import React from "react";
import { Link } from 'react-router-dom'
import { Container, Navbar } from "react-bootstrap";


import logo from './../../assets/logo.png'

const HeaderUser = ({ngeluh,nesu}) => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/landingPage'>
                            <img src={logo}
                                alt="Logo WOW"
                                width="79"
                                height="60"
                                className="d-inline-block align-top ms-5 "
                            />
                            {ngeluh}
                            {nesu}
                        </Link>
                        
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
export default HeaderUser;