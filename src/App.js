import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Menu from "./Pages/Menu";
import BookingPage from "./Pages/BookingPage";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";
import ConfirmBooking from "./Components/Booking/ConfirmBooking";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  { path: "/menu", element: <Menu /> },
  { path: "/reservations", element: <BookingPage /> },
  { path: "/order-online", element: <OrderOnline /> },
  { path: "/login", element: <Login /> },
  { path: "/confirmation", element: <ConfirmBooking /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
