import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./UnderConstruction.module.css";

function UnderConstruction() {
  return (
    <main className={`${styles.section} d-flex align-items-center text-center`}>
    <Col>
    <Row>
      <Card border="warning" className="w-25 mx-auto my-auto">
        <Card.Body>
          <p className={styles.text}>Cooking...</p>
          <img src="images/food.gif" alt="Animated icon" className="w-25" />
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <p className={`${styles.attribution} w-25 mx-auto`}>
        <a
          href="https://www.flaticon.com/free-animated-icons/food-and-restaurant"
          title="food and restaurant animated icons"
        >
          Food and restaurant animated icons created by Freepik - Flaticon
        </a>
      </p>
      </Row>
      </Col>
    </main>
  );
}

export default UnderConstruction;
