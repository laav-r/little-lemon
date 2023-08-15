import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { updateTimes, initializeTimes } from "./TableReservation";
import { getAvailableTimes, submitFormData } from "../utils/utils";

test("intializeTimes function is equal to getAvailableTimes", () => {
  const weekDay = new Date();
  const initialTimes = initializeTimes();
  const expected = getAvailableTimes(weekDay);
  expect(expected).toEqual(initialTimes);
});

test("updateTimes returns the same state", () => {
  const state = ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];
  const action = { type: "some-action" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

test("submitFormData returns true", () => {
  const formData = {
    date: "2023-08-30",
    time: "19:00",
    guestsNumber: 7,
    tableType: "Indoor",
    occasion: "None",
    guestName: "Joe",
    email: "joe@mail.com",
    phone: "1234567890",
    observations: "",
  };
  const result = submitFormData(formData);
  expect(result).toBe(true)
});
