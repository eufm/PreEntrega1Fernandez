import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logo from '../assets/logo.png';


function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-custom fixed-top shadow-sm">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="Logo" src={logo} className="logo d-inline-block align-top"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#revistas">Revistas</Nav.Link>
                        <Nav.Link href="#sobreNosotros">Sobre nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
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