import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

test("Renders BookingForm date label", () => {
    render (<BookingForm />);
    const labelElement = screen.getByLabelText("Date*");
    expect(labelElement).toBeInTheDocument();
});