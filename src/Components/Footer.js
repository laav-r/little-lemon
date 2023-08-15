import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="py-5">
        <Row>
          <Col lg={2} sm={4}>
            <img
              src="images/little-lemon-monochrome-logo.png"
              alt="Little Lemon logo"
              className={styles.image}
            />
          </Col>
          <Col lg={3} sm={3}>
            <ul className={styles.list}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="#about">
                <li>About</li>
              </Link>
              <Link to="/menu">
                <li>Menu</li>
              </Link>
              <Link to="/reservations">
                <li>Reservations</li>
              </Link>
              <Link to="/order">
                <li>Order online</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </Col>
          <Col lg={7} sm={5}>
            <ul className={styles.list}>
              <li className={styles.contact}>Contact</li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +12 345 678 9900
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@littlelemon.com
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} /> 5301 S Hyde Park Blvd,
                Chicago, IL 60615
              </li>
              <li className={styles.icons}>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
                </a>
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
