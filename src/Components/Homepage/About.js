import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <h1 className={styles["about-title"]}>Little Lemon</h1>
            <h2 className={styles["about-subtitle"]}>Chicago</h2>
            <p className={styles["about-description"]}>
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. To craft the menu, Mario relies on family
              recipes and his experience as a chef in Italy. Adrian does all the
              marketing for the restaurant and led the effort to expand the menu
              beyond classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </Col>
          <Col lg={6} md={6}>
              <img src="images/mario-adrian.jpg" alt="Mario and Adrian" className={`${styles.image} ${styles["img-1"]}`} />
              <img src="images/restaurant-chef.jpg" alt="Restaurant chef" className={`${styles.image} ${styles["img-2"]}`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
