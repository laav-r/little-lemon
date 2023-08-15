import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./ReservationsHeroSection.module.css";

function ReservationsHeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h2 className={styles.subtitle}>Chicago</h2>
            <p className={`${styles.description} pt-5 pe-5 me-5`}>Reserve a table and enjoy an unique experience at our lovely restaurant!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ReservationsHeroSection;
