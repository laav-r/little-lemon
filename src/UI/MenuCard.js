import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import styles from "./MenuCard.module.css";

function MenuCard(props) {
  return (
    <Card className={`${styles.card} h-100`} bg="light" border="light">
      <Card.Img
        variant="top"
        src={props.image}
        alt={props.alt}
        className={`${styles.image} px-4 py-4`}
      />
      <Card.Body>
        <Card.Title className={`${styles.title} d-flex justify-content-between`}>
          {props.title} <span className={styles.price}>{props.price}</span>
        </Card.Title>
        <Card.Text className={styles.text}>{props.content}</Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <Button variant="light" className={styles.btn}>
          Order for delivery <FontAwesomeIcon icon={faPersonBiking} />
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default MenuCard;
