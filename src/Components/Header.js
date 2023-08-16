import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

function NavigationBar() {
  return (
    <header className={styles.header}>
      <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="images/Logo.svg"
              alt="Little Lemon Logo"
              className={styles.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" className={`ms-auto ${styles.link}`}>
              <Nav.Link as={NavLink} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={NavLink} to="/menu">
                MENU
              </Nav.Link>
              <Nav.Link as={NavLink} to="/reservations">
                RESERVATIONS
              </Nav.Link>
              <Nav.Link as={NavLink} to="/order-online">
                ORDER ONLINE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
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
