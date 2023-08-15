import React, { useReducer } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BookingForm from "../Components/Booking/BookingForm";
import ReservationsHeroSection from "../Components/ReservationsHeroSection";
import BackButton from "../UI/BackButton";
import { Container } from "react-bootstrap";
import { getAvailableTimes } from "../utils/utils";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update-times":
      return getAvailableTimes(action.date);
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date();
  return getAvailableTimes(today);
};
function TableReservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <React.Fragment>
      <Header />
      <ReservationsHeroSection />
      <main>
        <Container>
          <BackButton />
          <BookingForm
            availableTimes={availableTimes}
            dispatchAvailableTimes={dispatch}
          />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default TableReservation;
