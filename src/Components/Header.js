import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header>
      <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="images/Logo.svg" alt="Little Lemon Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu-link">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                MENU
              </Nav.Link>
              <Nav.Link as={Link} to="/reservations">
                RESERVATIONS
              </Nav.Link>
              <Nav.Link as={Link} to="/order-online">
                ORDER ONLINE
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
