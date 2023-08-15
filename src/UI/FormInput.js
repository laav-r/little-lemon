import React from "react";
import { Form } from "react-bootstrap";

function FormInput(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label className={props.labelStyle}>{props.label}</Form.Label>
      <Form.Control
        type="text"
        size="lg"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        aria-describedby={props.ariaDescribedby}
        isInvalid={props.isInvalid}
      />
    </Form.Group>
  );
}

export default FormInput;
