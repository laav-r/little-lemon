import React from "react";
import Button from "../UI/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MainHeroSection.module.css";

function MainHeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <Container className="py-5 px-5">
        <Row>
          <Col lg={6} md={7}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h2 className={styles.subtitle}>Chicago</h2>
            <p className={styles.description}>
              We are a family owned mediteranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <Link to="/reservations">
              <Button type="button" name="Reserve a table" class="mt-5" />
            </Link>
          </Col>
          <Col lg={6} md={5} className="d-flex justify-content-center">
            <img
              src="images/restaurantfood.jpg"
              alt="Restaurant"
              className={styles["image"]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainHeroSection;
