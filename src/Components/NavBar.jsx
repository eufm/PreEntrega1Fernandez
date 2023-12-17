import React from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/logo.png';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-custom fixed-top shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img alt="Logo" src={logo} className="logo d-inline-block align-top"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/category/aventura">Adventure</Nav.Link>
                        <Nav.Link as={Link} to="/category/terror">Horror</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
