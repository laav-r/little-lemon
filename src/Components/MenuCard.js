import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import "./MenuCard.css";

function MenuCard(props) {
  return (
    <Card className="h-100" bg="light" border="light">
      <Card.Img
        variant="top"
        src={props.image}
        alt={props.alt}
        className="px-4 py-4"
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {props.title} <span className="price">{props.price}</span>
        </Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="light">
          Order for delivery <FontAwesomeIcon icon={faPersonBiking} />
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default MenuCard;
