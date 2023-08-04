import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Menu from "./Components/Menu";
// import About from "./Components/About";
import TableReservation from "./Components/TableReservation";
import OrderOnline from "./Components/OrderOnline";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  // {path: "/about", element: <About />},
  {path: "/menu", element: <Menu />},
  {path: "/reservations", element: <TableReservation />},
  {path: "/order-online", element: <OrderOnline />},
  {path: "/login", element: <Login />}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
