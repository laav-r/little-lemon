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
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="py-5">
        <Row>
          <Col lg={2} sm={4}>
            <img
              src="images/little-lemon-monochrome-logo.png"
              alt="Little Lemon logo"
              className="footer-img"
            />
          </Col>
          <Col lg={3} sm={3}>
            <ul className="footer-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="reservations">Reservations</a>
              </li>
              <li>
                <a href="#order">Order online</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </Col>
          <Col lg={7} sm={5}>
            <ul className="footer-list">
              <li className="contact">Contact</li>
              <li><FontAwesomeIcon icon={faPhone} /> +12 345 678 9900</li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@littlelemon.com
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} /> 5301 S Hyde Park Blvd,
                Chicago, IL 60615
              </li>
              <li className="social-media-icons">
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
