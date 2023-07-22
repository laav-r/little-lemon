import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterImage from "../Assets/Images/restaurant.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer my-auto">
      <Container className="py-5">
        <Row>
          <Col lg={3}>
            <img
              src={FooterImage}
              alt="Little Lemon Restaurant"
              className="footer-img"
            />
          </Col>
          <Col lg={3} className="my-auto">
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
          <Col lg={6} className="my-auto">
            <ul className="footer-list">
              <li>+12 345 678 9900</li>
              <li>info@littlelemon.com</li>
              <li>5301 S Hyde Park Blvd, Chicago, IL 60615</li>
              <li className="social-media-icons">
                <a href="https://www.facebook.com"><FontAwesomeIcon icon={faSquareFacebook} size="2xl" /></a>
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
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
