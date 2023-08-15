import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Button from "../../UI/Button";
import FormInput from "../../UI/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitFormData } from "../../utils/utils";
import styles from "./BookingForm.module.css";

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const minDate = new Date().toISOString().split("T")[0];
  const newDate = new Date();
  const max = newDate.setDate(newDate.getDate() + 30);
  const maxDate = new Date(max).toISOString().split("T")[0];

  // eslint-disable-next-line
  const phoneRegex = /(^(\+?\-? *[0-9]+)([,0-9 ]*)([0-9 ])*$)|(^ *$)/;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      time: availableTimes[0],
      guestsNumber: 1,
      tableType: "Select table type",
      occasion: "Select the occasion",
      guestName: "",
      email: "",
      phone: "",
      observations: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("* Required"),
      time: Yup.string().required("* Required"),
      guestsNumber: Yup.number()
        .min(1, "You need to reserve at least one seat.")
        .max(
          10,
          "For more than 10 guests please contact us via email or phone."
        )
        .integer()
        .required("* Required"),
      occasion: Yup.string().required("* Required"),
      guestName: Yup.string()
        .max(15, "Maximum 15 characters")
        .required("* Required"),
      email: Yup.string().email("Invalid email address").required("* Required"),
      phone: Yup.string()
        .matches(phoneRegex, "Invalid phone number")
        .max(12, "Invalid phone number. No more than 12 characters")
        .required("* Required"),
      observations: Yup.string().max(
        200,
        "Message can have maximum 200 characters"
      ),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const response = submitFormData(values);
      if (response) {
        localStorage.setItem("reservation", JSON.stringify(values));
      }
      setSubmitting(true);
      setTimeout(() => {
        navigate("/confirmation");
        resetForm();
        setSubmitting(false);
      }, 500);
    },
  });

  useEffect(
    () =>
      dispatchAvailableTimes({
        type: "update-times",
        date: new Date(formik.values.date),
      }),
    [dispatchAvailableTimes, formik.values.date]
  );

  return (
      <Form onSubmit={formik.handleSubmit} className="booking-form mb-5">
        <Row>
          <Col lg={6}>
            <em>
              <p className={styles.required}>
                All fields marked with * are required
              </p>
            </em>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Group controlId="date">
              <Form.Label className={styles["form-label"]}>Date*</Form.Label>
              <Form.Control
                type="date"
                name="date"
                min={minDate}
                max={maxDate}
                {...formik.getFieldProps("date")}
                size="lg"
                aria-describedby="date"
                isInvalid={formik.touched.date && formik.errors.date}
              />
              <Form.Text id="date" bsPrefix="form-text">
                {formik.touched.date && formik.errors.date ? (
                  <div>{formik.errors.date}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col lg={4}>
            <Form.Group controlId="time">
              <Form.Label className={styles["form-label"]}>Time*</Form.Label>
              <Form.Select
                name="time"
                {...formik.getFieldProps("time")}
                size="lg"
                aria-describedby="time"
                isInvalid={formik.touched.time && formik.errors.time}
              >
                {availableTimes.map((availableTime, index) => (
                  <option key={index}>{availableTime}</option>
                ))}
              </Form.Select>
              <Form.Text id="time">
                {formik.touched.time && formik.errors.time ? (
                  <div>{formik.errors.time}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="guestsNumber">
              <Form.Label className={styles["form-label"]}>
                Number of guests*
              </Form.Label>
              <Form.Control
                type="number"
                name="guestsNumber"
                {...formik.getFieldProps("guestsNumber")}
                size="lg"
                aria-describedby="guestNumber"
                isInvalid={
                  formik.touched.guestsNumber && formik.errors.guestsNumber
                }
              />
              <Form.Text id="guestsNumber">
                {formik.touched.guestsNumber && formik.errors.guestsNumber ? (
                  <div>{formik.errors.guestsNumber}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="tableType">
              <Form.Label className={styles["form-label"]}>
                Type of table (optional)
              </Form.Label>
              <Form.Select
                name="tableType"
                size="lg"
                {...formik.getFieldProps("tableType")}
              >
                <option>Select table type</option>
                <option>Indoor</option>
                <option>Outdoor</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group controlId="occasion">
              <Form.Label className={styles["form-label"]}>
                Occasion*
              </Form.Label>
              <Form.Select
                name="occasion"
                size="lg"
                {...formik.getFieldProps("occasion")}
              >
                <option>Select the occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>None</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <hr className="mt-5" />
        <Row>
          <Col lg={6} md={6}>
            <FormInput
              id="guestName"
              name="guestName"
              label="Name*"
              labelStyle={styles["form-label"]}
              {...formik.getFieldProps("guestName")}
              ariaDescribedby="guestName"
              isInvalid={formik.touched.guestName && formik.errors.guestName}
            />
            <Form.Text id="guestName">
              {formik.touched.guestName && formik.errors.guestName ? (
                <div>{formik.errors.guestName}</div>
              ) : null}
            </Form.Text>
            <FormInput
              id="email"
              name="email"
              label="Email*"
              labelStyle={styles["form-label"]}
              {...formik.getFieldProps("email")}
              ariaDescribedby="email"
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Text id="email">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </Form.Text>
            <FormInput
              id="phone"
              name="phone"
              label="Phone*"
              labelStyle={styles["form-label"]}
              {...formik.getFieldProps("phone")}
              ariaDescribedby="phone"
              isInvalid={formik.touched.phone && formik.errors.phone}
            />
            <Form.Text id="phone">
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}{" "}
            </Form.Text>
          </Col>
        </Row>
        <hr className="mt-5" />
        <Row>
          <Col lg={6} md={6}>
            <Form.Group controlId="observations">
              <Form.Label className={styles["form-label"]}>
                Additional observations (optional)
              </Form.Label>
              <Form.Control
                className={styles["form-control"]}
                as="textarea"
                name="observations"
                rows={4}
                maxLength={201}
                size="lg"
                {...formik.getFieldProps("observations")}
                aria-describedby="observations"
                isInvalid={
                  formik.touched.observations && formik.errors.observations
                }
              />
              <Form.Text id="observations">
                {formik.touched.observations && formik.errors.observations ? (
                  <div>{formik.errors.observations}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          class="mt-5"
          name="Reserve"
          disabled={formik.isSubmitting}
        />
      </Form>
  );
}

export default BookingForm;
