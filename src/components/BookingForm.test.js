/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Testing Booking Page", () => {
  test("Renders the Booking Form", () => {
    const props = {
      fields: {
        date: "",
        time: "",
        number: 2,
        occasion: "Birthday",
      },
      handleChange: () => {},
      availableTimes: [
        {
          key: "17",
          value: "17:00",
        },
        {
          key: "18",
          value: "18:00",
        },
      ],
    };
    render(
      <BookingForm
        fields={props.fields}
        handleChange={props.handleChange}
        availableTimes={props.availableTimes}
      />
    );
    const buttonText = screen.getByText("Make Your reservation");
    expect(buttonText).toBeInTheDocument();
  });
});
