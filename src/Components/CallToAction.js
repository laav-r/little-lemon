import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="hero-section">
      <Container className="py-5 px-5">
        <Row>
          <Col lg={6} md={7}>
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p className="description                                                                                                                                                                                      ">
              We are a family owned mediteranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
           <Link to="/reservations"> <button type="button" className="reserve-btn shadow">Reserve a table</button></Link>
          </Col>
          <Col lg={6} md={5} className="d-flex justify-content-center">
            <img
              src="images/restaurantfood.jpg"
              alt="Restaurant"
              className="hero-section-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CallToAction;
