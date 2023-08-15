import React from "react";
import Header from "../Header";
import ReservationsHeroSection from "../ReservationsHeroSection";
import Footer from "../Footer";
import Button from "../../UI/Button";
import styles from "./ConfirmBooking.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


function ConfirmBooking() {
  const details = JSON.parse(localStorage.getItem("reservation"));

  return (
      <React.Fragment>
        <Header />
        <ReservationsHeroSection />
        <main className="my-5">
          <Row className="d-flex justify-content-center">
            <Col lg={4} md={6} sm={8}>
              <Container bsPrefix={styles.container}>
                <h3 className={styles["res-summary"]}>Reservation summary</h3>
                <hr />
                <div className={styles["res-details"]}>
                  <p>Date: {details.date}</p>
                  <p>Time: {details.time}</p>
                  <p>Number of guests: {details.guestsNumber}</p>
                  <p>Type of table: {details.tableType}</p>
                  <p>Occasion: {details.occasion}</p>
                  <p>Name: {details.guestName}</p>
                  <p>Email: {details.email}</p>
                  <p>Phone: {details.phone}</p>
                  <p>Aditional observations: {details.observations}</p>
                </div>
                <hr />
                <p className={styles["res-summary"]}>
                  Thank you for your reservation. An email was sent to you with
                  all the details.
                </p>
                <Link to="/">
                  <Button type="button" name="Back to homepage" class="mt-3" />
                </Link>
              </Container>
            </Col>
          </Row>
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default ConfirmBooking;
