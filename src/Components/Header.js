import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function NavigationBar() {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="light"
        data-bs-theme="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="images/Logo.svg"
              alt="Little Lemon Logo"
              className={styles.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="underline"
              defaultActiveKey="/"
              className={`ms-auto ${styles.link}`}
            >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link href="#about" eventKey="about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" eventKey="menu">
                MENU
              </Nav.Link>
              <Nav.Link as={Link} to="/reservations" eventKey="reservations">
                RESERVATIONS
              </Nav.Link>
              <Nav.Link as={Link} to="/order-online" eventKey="order-online">
                ORDER ONLINE
              </Nav.Link>
              <Nav.Link as={Link} to="/login" eventKey="login">
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
