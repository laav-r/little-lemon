import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import dishes from "./dishes";
import "./Specials.css";

function Specials() {
  return (
    <section className="specials">
      <Container>
        <Row className="mb-4">
          <Col lg={6} md={6} xs={12}>
            <h4 className="specials-heading">This week's specials!</h4>
          </Col>
          <Col lg={6} md={6} xs={12} className="d-flex justify-content-lg-end justify-content-sm-start" >
            <Link to="/order-online">
              <button
                type="button"
                as={Link}
                to="/order-online"
                className="menu-btn shadow"
              >
                Online menu
              </button>
            </Link>
          </Col>
        </Row>
        <Row lg={3} md={2} xs={1}>
          {dishes.map((dish) => (
            <Col className="mb-3">
              <MenuCard
                image={dish.image}
                alt={dish.alt}
                title={dish.title}
                price={dish.price}
                content={dish.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Specials;
