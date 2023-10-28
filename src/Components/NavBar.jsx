import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-purple">
            <Container>
                <Navbar.Brand href="#home">Single Player by EuFM</Navbar.Brand>
                <div className="position-absolute end-0 top-0 d-flex">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ms-auto me-4">
                        <CartWidget/>
                    </Nav>
                </div>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Revistas</Nav.Link>
                        <Nav.Link href="#link">Sobre nosotros</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;