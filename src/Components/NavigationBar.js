import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/Images/Logo .svg";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
          <Navbar.Brand>
            <img src={Logo} alt="Little Lemon Logo" className="logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu-link">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#menu">MENU</Nav.Link>
              <Nav.Link href="#reservations">RESERVATIONS</Nav.Link>
              <Nav.Link href="#order">ORDER ONLINE</Nav.Link>
              <Nav.Link href="#login">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
